import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import logo from '../assets/logo-full.png';
import { Header, HeaderProps } from './header';
import { Menu, MenuItem } from './menu';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args): React.ReactElement => (
  <Header {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <img alt="Foursevens logo" src={logo} />,
    <Menu>
      <MenuItem key="key-1">
        <a href="/">Home</a>
      </MenuItem>
      <MenuItem key="key-2" highlight="yes">
        <a href="/">Contact</a>
      </MenuItem>
    </Menu>,
  ],
};
