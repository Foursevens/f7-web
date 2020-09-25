import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Container, ContainerProps } from './container';

export default {
  title: 'Example/Container',
  component: Container,
};

const Template: Story<ContainerProps> = (args): React.ReactElement => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello World!',
};
