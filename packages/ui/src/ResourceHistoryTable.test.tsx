import { Bundle, MedplumClient, Patient } from '@medplum/core';
import { render } from '@testing-library/react';
import { randomUUID } from 'crypto';
import React from 'react';
import { MedplumProvider } from './MedplumProvider';
import { ResourceHistoryTable, ResourceHistoryTableProps } from './ResourceHistoryTable';

const patientId = randomUUID();
const version1Id = randomUUID();
const version2Id = randomUUID();

const historyBundle: Bundle = {
  resourceType: 'Bundle',
  entry: [
    {
      resource: {
        resourceType: 'Patient',
        id: patientId,
        meta: {
          lastUpdated: new Date().toISOString(),
          versionId: version1Id
        },
        name: [{
          given: ['Alice'],
          family: 'Smith'
        }]
      } as Patient
    },
    {
      resource: {
        resourceType: 'Patient',
        id: patientId,
        meta: {
          lastUpdated: new Date(),
          versionId: version2Id
        },
        name: [{
          given: ['Alice'],
          family: 'Smith'
        }],
        active: true
      } as Patient
    }
  ]
}

const mockRouter = {
  push: (path: string, state: any) => {
    alert('Navigate to: ' + path + ' (state=' + JSON.stringify(state) + ')');
  },
  listen: () => (() => undefined) // Return mock "unlisten" handler
}

function mockFetch(url: string, options: any): Promise<any> {
  const response: any = {
    request: {
      url,
      options
    },
    ...historyBundle
  };

  return Promise.resolve({
    blob: () => Promise.resolve(response),
    json: () => Promise.resolve(response)
  });
}

const medplum = new MedplumClient({
  baseUrl: 'https://example.com/',
  clientId: 'my-client-id',
  fetch: mockFetch
});

beforeAll(async () => {
  await medplum.signIn('admin@medplum.com', 'admin', 'practitioner', 'openid');
});

const setup = (args: ResourceHistoryTableProps) => {
  return render(
    <MedplumProvider medplum={medplum} router={mockRouter}>
      <ResourceHistoryTable {...args} />
    </MedplumProvider>
  );
};

test('ResourceHistoryTable renders', async (done) => {
  const utils = setup({
    resourceType: 'Patient',
    id: patientId
  });

  const el = await utils.findByText('Loading...');
  expect(el).not.toBeUndefined();
  done();
});

test('ResourceHistoryTable renders preloaded history', async (done) => {
  const utils = setup({
    history: historyBundle
  });

  const el = await utils.findByText(version1Id);
  expect(el).not.toBeUndefined();
  done();
});

test('ResourceHistoryTable renders after loading the resource', async (done) => {
  const utils = setup({
    resourceType: 'Patient',
    id: patientId
  });

  const el = await utils.findByText(version1Id);
  expect(el).not.toBeUndefined();
  done();
});
