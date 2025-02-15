import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Document } from '../Document';
import { Tab } from '../Tab';
import { TabBar, TabBarProps } from '../TabBar';
import { TabSwitch } from '../TabSwitch';
import { TabPanel } from '../TabPanel';

export default {
  title: 'Medplum/TabBar',
  component: TabBar,
} as Meta;

export const Basic = (args: TabBarProps) => {
  const [value, setValue] = useState('item1');
  return (
    <>
      <TabBar value={value} onChange={setValue}>
        <Tab name="item1" label="Item 1" />
        <Tab name="item2" label="Item 2" />
        <Tab name="item3" label="Item 3" />
      </TabBar>
      <Document>
        <TabSwitch value={value}>
          <TabPanel name="item1">This is item #1!</TabPanel>
          <TabPanel name="item2"><strong>Panel number two</strong></TabPanel>
          <TabPanel name="item3">Three</TabPanel>
        </TabSwitch>
      </Document>
    </>
  );
};
