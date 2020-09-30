import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Tag, TagProps } from './tag';

export default {
  title: 'Example/Tag',
  component: Tag,
};

const Template: Story<TagProps> = (args): React.ReactElement => (
  <Tag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem Ipsum',
};
