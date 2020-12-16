import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Container, MenuItem } from '.';
import { LOGO } from './data';
import { Header, HeaderProps } from './header';

export default {
  title: '3. Organisms / Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<HeaderProps> = (argumentz): React.ReactElement => (
  <Container>
    <Header {...argumentz} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <MenuItem key="key-1">
      <a href="/">Home</a>
    </MenuItem>,
    <MenuItem key="key-2" highlight="yes">
      <a href="/">Contact</a>
    </MenuItem>,
  ],
  logo: LOGO,
};
