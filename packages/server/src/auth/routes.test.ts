import { ClientApplication } from '@medplum/core';
import express from 'express';
import request from 'supertest';
import { initApp } from '../app';
import { loadConfig } from '../config';
import { closeDatabase, initDatabase } from '../database';
import { isOk, repo } from '../fhir';
import { initKeys } from '../oauth';
import { seedDatabase } from '../seed';

const app = express();
let client: ClientApplication;

beforeAll(async () => {
  const config = await loadConfig('file:medplum.config.json');
  await initDatabase({ client: 'sqlite3' });
  await seedDatabase();
  await initApp(app);
  await initKeys(config);

  const [outcome, result] = await repo.createResource({
    resourceType: 'ClientApplication',
    secret: 'big-long-string',
    redirectUri: 'https://example.com'
  } as ClientApplication);

  if (!isOk(outcome) || !result) {
    console.log(JSON.stringify(outcome, undefined, 2));
    throw new Error('Error creating application');
  }

  client = result;
});

afterAll(async () => {
  await closeDatabase();
});

test('Login invalid client UUID', async (done) => {
  request(app)
    .post('/auth/login')
    .type('json')
    .send({
      clientId: '123',
      email: 'admin@medplum.com',
      password: 'admin',
      scope: 'openid',
      role: 'practitioner'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.status).toBe(400);
      expect(res.body.issue).not.toBeUndefined();
      expect(res.body.issue[0].details.text).toBe('Invalid UUID');
      done();
    });
});

test('Login invalid client ID', async (done) => {
  request(app)
    .post('/auth/login')
    .type('json')
    .send({
      clientId: 'e99126bb-c748-4c00-8d28-4e88dfb88278',
      email: 'admin@medplum.com',
      password: 'admin',
      scope: 'openid',
      role: 'practitioner'
    })
    .expect(404)
    .end((err, res) => {
      expect(res.status).toBe(404);
      expect(res.body.issue).not.toBeUndefined();
      expect(res.body.issue[0].details.text).toBe('Not found');
      done();
    });
});

test('Login wrong password', async (done) => {
  request(app)
    .post('/auth/login')
    .type('json')
    .send({
      clientId: client.id,
      email: 'admin@medplum.com',
      password: 'wrong-password',
      scope: 'openid',
      role: 'practitioner'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.status).toBe(400);
      expect(res.body.issue).not.toBeUndefined();
      expect(res.body.issue[0].details.text).toBe('Incorrect password');
      done();
    });
});

test('Login success', async (done) => {
  request(app)
    .post('/auth/login')
    .type('json')
    .send({
      clientId: client.id,
      email: 'admin@medplum.com',
      password: 'admin',
      scope: 'openid',
      role: 'practitioner'
    })
    .expect(200)
    .end((err, res) => {
      expect(res.status).toBe(200);
      expect(res.body.user).not.toBeUndefined();
      expect(res.body.profile).not.toBeUndefined();
      expect(res.body.idToken).not.toBeUndefined();
      expect(res.body.accessToken).not.toBeUndefined();
      expect(res.body.refreshToken).not.toBeUndefined();
      done();
    });
});
