import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { LOREM } from './data';
import { Paragraph, ParagraphProps } from './paragraph';

export default {
  title: 'Example/Paragraph',
  component: Paragraph,
};

const Template: Story<ParagraphProps> = (args): React.ReactElement => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: LOREM,
};
