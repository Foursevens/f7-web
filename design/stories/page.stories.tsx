import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import * as HeaderStories from './header.stories';
import { Page, PageProps } from './page';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
