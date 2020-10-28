import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Menu, MenuItem } from '.';
import logo from '../stories-assets/logo-full.png';
import { Header, HeaderProps } from './header';

export default {
  title: '3. Organisms / Header',
  component: Header,
};

const Template: Story<HeaderProps> = (argumentz): React.ReactElement => (
  <Header {...argumentz} />
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
