import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, ButtonLinkProps } from './button-link';

export default {
  title: '1. Atoms / ButtonLink',
  component: ButtonLink,
};

const Template: Story<ButtonLinkProps> = (argumentz): React.ReactElement => (
  <ButtonLink {...argumentz} />
);

export const Primary = Template.bind({});
Primary.args = {
  background: 'primary',
  children: 'A Button',
  href: '/',
};

export const Secondary = Template.bind({});
Secondary.args = {
  background: 'secondary',
  children: 'A Button',
  href: '/',
};
