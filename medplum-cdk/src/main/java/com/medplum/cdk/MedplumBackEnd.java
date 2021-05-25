package com.medplum.cdk;

import static java.util.Collections.*;

import java.util.Arrays;

import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.Duration;
import software.amazon.awscdk.core.RemovalPolicy;
import software.amazon.awscdk.services.ec2.SecurityGroup;
import software.amazon.awscdk.services.ec2.SecurityGroupProps;
import software.amazon.awscdk.services.ec2.SubnetSelection;
import software.amazon.awscdk.services.ec2.SubnetType;
import software.amazon.awscdk.services.ec2.Vpc;
import software.amazon.awscdk.services.ecr.Repository;
import software.amazon.awscdk.services.ecs.AwsLogDriver;
import software.amazon.awscdk.services.ecs.AwsLogDriverProps;
import software.amazon.awscdk.services.ecs.Cluster;
import software.amazon.awscdk.services.ecs.ClusterProps;
import software.amazon.awscdk.services.ecs.ContainerDefinitionOptions;
import software.amazon.awscdk.services.ecs.ContainerImage;
import software.amazon.awscdk.services.ecs.FargateService;
import software.amazon.awscdk.services.ecs.FargateServiceProps;
import software.amazon.awscdk.services.ecs.FargateTaskDefinition;
import software.amazon.awscdk.services.ecs.FargateTaskDefinitionProps;
import software.amazon.awscdk.services.ecs.PortMapping;
import software.amazon.awscdk.services.elasticloadbalancingv2.ApplicationLoadBalancer;
import software.amazon.awscdk.services.elasticloadbalancingv2.ApplicationLoadBalancerProps;
import software.amazon.awscdk.services.elasticloadbalancingv2.ApplicationProtocol;
import software.amazon.awscdk.services.elasticloadbalancingv2.ApplicationTargetGroup;
import software.amazon.awscdk.services.elasticloadbalancingv2.ApplicationTargetGroupProps;
import software.amazon.awscdk.services.elasticloadbalancingv2.BaseApplicationListenerProps;
import software.amazon.awscdk.services.elasticloadbalancingv2.HealthCheck;
import software.amazon.awscdk.services.elasticloadbalancingv2.ListenerAction;
import software.amazon.awscdk.services.elasticloadbalancingv2.ListenerCertificate;
import software.amazon.awscdk.services.elasticloadbalancingv2.RedirectOptions;
import software.amazon.awscdk.services.elasticloadbalancingv2.SslPolicy;
import software.amazon.awscdk.services.iam.ManagedPolicy;
import software.amazon.awscdk.services.iam.Role;
import software.amazon.awscdk.services.iam.RoleProps;
import software.amazon.awscdk.services.iam.ServicePrincipal;
import software.amazon.awscdk.services.logs.LogGroup;
import software.amazon.awscdk.services.logs.LogGroupProps;
import software.amazon.awscdk.services.rds.AuroraPostgresClusterEngineProps;
import software.amazon.awscdk.services.rds.AuroraPostgresEngineVersion;
import software.amazon.awscdk.services.rds.Credentials;
import software.amazon.awscdk.services.rds.DatabaseCluster;
import software.amazon.awscdk.services.rds.DatabaseClusterEngine;
import software.amazon.awscdk.services.rds.DatabaseClusterProps;
import software.amazon.awscdk.services.rds.InstanceProps;
import software.amazon.awscdk.services.route53.ARecord;
import software.amazon.awscdk.services.route53.ARecordProps;
import software.amazon.awscdk.services.route53.HostedZone;
import software.amazon.awscdk.services.route53.HostedZoneProviderProps;
import software.amazon.awscdk.services.route53.RecordTarget;
import software.amazon.awscdk.services.route53.targets.LoadBalancerTarget;
import software.amazon.awscdk.services.ssm.ParameterTier;
import software.amazon.awscdk.services.ssm.StringParameter;
import software.amazon.awscdk.services.ssm.StringParameterProps;

public class MedplumBackEnd extends Construct {
    private static final String API_CERTIFICATE_ARN = "arn:aws:acm:us-east-1:647991932601:certificate/08bf1daf-3a2b-4cbe-91a0-739b4364a1ec";
    private static final String MEDPLUM_NAME = "prod";
    private static final String DOMAIN_NAME = "medplum.com";
    private static final String API_DOMAIN_NAME = "api." + DOMAIN_NAME;

    public MedplumBackEnd(final Construct scope, final String id) {
        super(scope, id);

        // VPC
        final var vpc = new Vpc(this, "VPC");

        // RDS
        final var rdsCluster = new DatabaseCluster(this, "DatabaseCluster", DatabaseClusterProps.builder()
                .engine(DatabaseClusterEngine.auroraPostgres(AuroraPostgresClusterEngineProps.builder()
                        .version(AuroraPostgresEngineVersion.VER_12_4)
                        .build()))
                .credentials(Credentials.fromGeneratedSecret("clusteradmin"))
                .defaultDatabaseName("medplum")
                .instances(1)
                .instanceProps(InstanceProps.builder()
                        .vpc(vpc)
                        .vpcSubnets(SubnetSelection.builder()
                                .subnetType(SubnetType.PRIVATE)
                                .build())
                        .build())
                .build());

        rdsCluster.getConnections().allowDefaultPortFromAnyIpv4();

        // ECS
        final var cluster = new Cluster(this, "Cluster", ClusterProps.builder()
                .vpc(vpc)
                .build());

        // Task Role
        final var taskRole = new Role(this, "TaskExecutionRole", RoleProps.builder()
                .assumedBy(new ServicePrincipal("ecs-tasks.amazonaws.com"))
                .build());

        // Task Policies
        final var policies = Arrays.asList(
                "service-role/AmazonECSTaskExecutionRolePolicy",
                "AmazonSSMReadOnlyAccess", // Read SSM parameters
                "SecretsManagerReadWrite", // Read RDS secrets
                "AmazonCognitoPowerUser", // Authenticate users with Cognito
                "AmazonSESFullAccess", // Send emails with SES
                "AmazonS3FullAccess" // upload content to content bucket
        );

        for (final String policy : policies) {
            taskRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policy));
        }

        // Task Definitions
        final var taskDefinition = new FargateTaskDefinition(this, "TaskDefinition", FargateTaskDefinitionProps.builder()
                .memoryLimitMiB(512)
                .cpu(256)
                .taskRole(taskRole)
                .build());

        // Log Group
        final var logGroup = new LogGroup(this, "LogGroup", LogGroupProps.builder()
                .logGroupName("/ecs/medplum/" + MEDPLUM_NAME)
                .removalPolicy(RemovalPolicy.DESTROY)
                .build());

        final var logDriver = new AwsLogDriver(AwsLogDriverProps.builder()
                .logGroup(logGroup)
                .streamPrefix("Medplum")
                .build());

        // ECR
        final var serviceRepo = Repository.fromRepositoryName(this, "MedplumRepo", "medplum-server");

        // Task Container
        final var containerDefinition = taskDefinition.addContainer("MedplumTaskDefinition", ContainerDefinitionOptions.builder()
                .image(ContainerImage.fromEcrRepository(serviceRepo, "latest"))
                .command(singletonList(MEDPLUM_NAME))
                .logging(logDriver)
                .build());

        containerDefinition.addPortMappings(PortMapping.builder()
                .containerPort(5000)
                .hostPort(5000)
                .build());

        // Security Groups
        final var securityGroup = new SecurityGroup(this, "ServiceSecurityGroup", SecurityGroupProps.builder()
                .allowAllOutbound(true)
                .securityGroupName("MedplumSecurityGroup")
                .vpc(vpc)
                .build());

        // Fargate Service
        final var fargateService = new FargateService(this, "FargateService", FargateServiceProps.builder()
                .cluster(cluster)
                .taskDefinition(taskDefinition)
                .assignPublicIp(false)
                .vpcSubnets(SubnetSelection.builder()
                        .subnetType(SubnetType.PRIVATE)
                        .build())
                .desiredCount(1)
                .securityGroups(singletonList(securityGroup))
                .build());

        // Load Balancer
        final var targetGroup = new ApplicationTargetGroup(this, "TargetGroup", ApplicationTargetGroupProps.builder()
                .vpc(vpc)
                .port(5000)
                .protocol(ApplicationProtocol.HTTP)
                .healthCheck(HealthCheck.builder()
                        .path("/healthcheck")
                        .interval(Duration.seconds(30))
                        .timeout(Duration.seconds(3))
                        .build())
                .targets(singletonList(fargateService))
                .build());

        final var loadBalancer = new ApplicationLoadBalancer(this, "LoadBalancer", ApplicationLoadBalancerProps.builder()
                .vpc(vpc)
                .internetFacing(true)
                .http2Enabled(true)
                .build());

        loadBalancer.addListener("HttpListener", BaseApplicationListenerProps.builder()
                .port(80)
                .defaultAction(ListenerAction.redirect(RedirectOptions.builder()
                        .protocol("HTTPS")
                        .port("443")
                        .build()))
                .build());

        loadBalancer.addListener("HttpsListener", BaseApplicationListenerProps.builder()
                .port(443)
                .certificates(singletonList(ListenerCertificate.fromArn(API_CERTIFICATE_ARN)))
                .sslPolicy(SslPolicy.FORWARD_SECRECY_TLS12_RES_GCM)
                .defaultAction(ListenerAction.forward(singletonList(targetGroup)))
                .build());

        // Route53
        final var zone = HostedZone.fromLookup(scope, "Zone", HostedZoneProviderProps.builder()
                .domainName(DOMAIN_NAME)
                .build());

        new ARecord(this, "LoadBalancerAliasRecord", ARecordProps.builder()
                .recordName(API_DOMAIN_NAME)
                .target(RecordTarget.fromAlias(new LoadBalancerTarget(loadBalancer)))
                .zone(zone)
                .build());

        // SSM Parameters
        new StringParameter(this, "DatabaseSecretsParameter", StringParameterProps.builder()
                .tier(ParameterTier.STANDARD)
                .parameterName("/medplum/" + MEDPLUM_NAME + "/DatabaseSecrets")
                .description("Database secrets ARN")
                .stringValue(rdsCluster.getSecret().getSecretArn())
                .build());
    }
}
