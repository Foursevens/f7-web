import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Header, HeaderProps } from './header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args): React.ReactElement => (
  <Header {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = { user: {} };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
