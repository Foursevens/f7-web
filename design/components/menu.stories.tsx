import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Menu, MenuItem, MenuProps } from './menu';

export default {
  component: Menu,
  title: 'Example / Menu',
};

const Template: Story<MenuProps> = (args): React.ReactElement => (
  <Menu {...args} />
);

export const Single = Template.bind({});
Single.args = {
  children: (
    <MenuItem>
      <a href="/">Home</a>
    </MenuItem>
  ),
};

export const Multiple = Template.bind({});
Multiple.args = {
  children: [
    <MenuItem key="1">
      <a href="/">Home</a>
    </MenuItem>,
    <MenuItem key="2">
      <a href="/">Cases</a>
    </MenuItem>,
    <MenuItem key="3">
      <a href="/">Stories</a>
    </MenuItem>,
  ],
};

export const MultipleWithHighlight = Template.bind({});
MultipleWithHighlight.args = {
  children: [
    <MenuItem key="1">
      <a href="/">Home</a>
    </MenuItem>,
    <MenuItem key="2">
      <a href="/">Cases</a>
    </MenuItem>,
    <MenuItem key="3">
      <a href="/">Stories</a>
    </MenuItem>,
    <MenuItem key="4" highlight>
      <a href="/">Contact</a>
    </MenuItem>,
  ],
};
