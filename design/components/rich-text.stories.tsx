import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, RichTextProps } from './rich-text';

export default {
  title: 'Example/Rich Text',
  component: RichText,
};

const Template: Story<RichTextProps> = (args): React.ReactElement => (
  <RichText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: `
    <p>
      Lorem ipsum <strong>dolor sit</strong> amet, <em>consectetur adipiscing elit</em>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <u>veniam</u>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <del>laborum</del>.
    </p>
    <ul>
      <li>Bullet</li>
      <li>Bullet</li>
    </ul>
    <p>
      <a href="https://ecosia.org">External link</a>.
    </p>
    <blockquote>
      <p>This is a quote</p>
    </blockquote>
  `,
};
