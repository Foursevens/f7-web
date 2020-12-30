import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, ButtonLinkProps } from './button-link';

export default {
  title: '1. Atoms / Button Link',
  component: ButtonLink,
};

const Template: Story<ButtonLinkProps> = (argumentz): React.ReactElement => (
  <ButtonLink {...argumentz} />
);

export const Primary = Template.bind({});
Primary.args = {
  design: 'primary',
  children: 'A Button',
  href: '/',
};

export const Secondary = Template.bind({});
Secondary.args = {
  design: 'secondary',
  children: 'A Button',
  href: '/',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  design: 'tertiary',
  children: 'A Button',
  href: '/',
};

export const TertiaryAlt = Template.bind({});
TertiaryAlt.args = {
  design: 'tertiary',
  designHover: 'secondary',
  children: 'A Button',
  href: '/',
};
TertiaryAlt.parameters = {
  backgrounds: { default: 'primary1' },
};
