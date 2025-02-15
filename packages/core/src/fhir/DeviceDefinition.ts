/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinition {

  /**
   * This is a DeviceDefinition resource
   */
  readonly resourceType: 'DeviceDefinition';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Unique instance identifiers assigned to a device by the software,
   * manufacturers, other organizations or owners. For example: handle ID.
   */
  readonly identifier?: Identifier[];

  /**
   * Unique device identifier (UDI) assigned to device label or package.
   * Note that the Device may include multiple udiCarriers as it either may
   * include just the udiCarrier for the jurisdiction it is sold, or for
   * multiple jurisdictions it could have been sold.
   */
  readonly udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /**
   * A name of the manufacturer.
   */
  readonly manufacturerString?: string;

  /**
   * A name of the manufacturer.
   */
  readonly manufacturerReference?: Reference;

  /**
   * A name given to the device to identify it.
   */
  readonly deviceName?: DeviceDefinitionDeviceName[];

  /**
   * The model number for the device.
   */
  readonly modelNumber?: string;

  /**
   * What kind of device or device system this is.
   */
  readonly type?: CodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the
   * device conforms for a particular purpose, and used for the
   * communication.
   */
  readonly specialization?: DeviceDefinitionSpecialization[];

  /**
   * The available versions of the device, e.g., software versions.
   */
  readonly version?: string[];

  /**
   * Safety characteristics of the device.
   */
  readonly safety?: CodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  readonly shelfLifeStorage?: ProductShelfLife[];

  /**
   * Dimensions, color etc.
   */
  readonly physicalCharacteristics?: ProdCharacteristic;

  /**
   * Language code for the human-readable text strings produced by the
   * device (all supported).
   */
  readonly languageCode?: CodeableConcept[];

  /**
   * Device capabilities.
   */
  readonly capability?: DeviceDefinitionCapability[];

  /**
   * The actual configuration settings of a device as it actually operates,
   * e.g., regulation status, time properties.
   */
  readonly property?: DeviceDefinitionProperty[];

  /**
   * An organization that is responsible for the provision and ongoing
   * maintenance of the device.
   */
  readonly owner?: Reference;

  /**
   * Contact details for an organization or a particular human that is
   * responsible for the device.
   */
  readonly contact?: ContactPoint[];

  /**
   * A network address on which the device may be contacted directly.
   */
  readonly url?: string;

  /**
   * Access to on-line information about the device.
   */
  readonly onlineInformation?: string;

  /**
   * Descriptive information, usage information or implantation information
   * that is not captured in an existing element.
   */
  readonly note?: Annotation[];

  /**
   * The quantity of the device present in the packaging (e.g. the number
   * of devices present in a pack, or the number of devices in the same
   * package of the medicinal product).
   */
  readonly quantity?: Quantity;

  /**
   * The parent device it can be part of.
   */
  readonly parentDevice?: Reference;

  /**
   * A substance used to create the material(s) of which the device is
   * made.
   */
  readonly material?: DeviceDefinitionMaterial[];
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionCapability {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Type of capability.
   */
  readonly type?: CodeableConcept;

  /**
   * Description of capability.
   */
  readonly description?: CodeableConcept[];
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionDeviceName {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The name of the device.
   */
  readonly name?: string;

  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName |
   * ManufactureDeviceName | ModelName.
   */
  readonly type?: string;
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionMaterial {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The substance.
   */
  readonly substance?: CodeableConcept;

  /**
   * Indicates an alternative material of the device.
   */
  readonly alternate?: boolean;

  /**
   * Whether the substance is a known or suspected allergen.
   */
  readonly allergenicIndicator?: boolean;
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionProperty {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Code that specifies the property DeviceDefinitionPropetyCode
   * (Extensible).
   */
  readonly type?: CodeableConcept;

  /**
   * Property value as a quantity.
   */
  readonly valueQuantity?: Quantity[];

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  readonly valueCode?: CodeableConcept[];
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionSpecialization {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The standard that is used to operate and communicate.
   */
  readonly systemType?: string;

  /**
   * The version of the standard that is used to operate and communicate.
   */
  readonly version?: string;
}

/**
 * The characteristics, operational status and capabilities of a
 * medical-related component of a medical device.
 */
export interface DeviceDefinitionUdiDeviceIdentifier {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The identifier that is to be associated with every Device that
   * references this DeviceDefintiion for the issuer and jurisdication
   * porvided in the DeviceDefinition.udiDeviceIdentifier.
   */
  readonly deviceIdentifier?: string;

  /**
   * The organization that assigns the identifier algorithm.
   */
  readonly issuer?: string;

  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  readonly jurisdiction?: string;
}
