import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Menu, MenuItem, MenuProps } from './menu';

export default {
  component: Menu,
  title: '2. Molecules / Menu',
};

const Template: Story<MenuProps> = (args): React.ReactElement => (
  <Menu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <MenuItem key="1">
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem key="2">
        <a href="/">Cases</a>
      </MenuItem>
      <MenuItem key="3">
        <a href="/">Services</a>
      </MenuItem>
    </>
  ),
};

export const WithActive = Template.bind({});
WithActive.args = {
  children: (
    <>
      <MenuItem key="1" active="yes">
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem key="2">
        <a href="/">Cases</a>
      </MenuItem>
      <MenuItem key="3">
        <a href="/">Services</a>
      </MenuItem>
    </>
  ),
};

export const WithHighlight = Template.bind({});
WithHighlight.args = {
  children: (
    <>
      <MenuItem key="1">
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem key="2">
        <a href="/">Cases</a>
      </MenuItem>
      <MenuItem key="3">
        <a href="/">Services</a>
      </MenuItem>
      <MenuItem key="4" highlight="yes">
        <a href="/">Contact</a>
      </MenuItem>
    </>
  ),
};

export const WithActiveHighlight = Template.bind({});
WithActiveHighlight.args = {
  children: (
    <>
      <MenuItem key="1">
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem key="2">
        <a href="/">Cases</a>
      </MenuItem>
      <MenuItem key="3">
        <a href="/">Services</a>
      </MenuItem>
      <MenuItem key="4" active="yes" highlight="yes">
        <a href="/">Contact</a>
      </MenuItem>
    </>
  ),
};
