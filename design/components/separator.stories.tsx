import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Separator } from './separator';

export default {
  title: 'Category / Separator',
  component: Separator,
};

const Template: Story = (argumentz): React.ReactElement => (
  <Separator {...argumentz} />
);

export const Default = Template.bind({});
