import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { MAP } from './data';
import { Map, MapProps } from './map';

export default {
  title: '1. Atoms / Map',
  component: Map,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<MapProps> = (argumentz): React.ReactElement => (
  <div style={{ marginTop: 50 }}>
    <Map {...argumentz} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: MAP,
};
