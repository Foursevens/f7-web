import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Tag, TagProps } from './tag';

export default {
  title: '1. Atoms / Tag',
  component: Tag,
};

const Template: Story<TagProps> = (argumentz): React.ReactElement => (
  <Tag {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem Ipsum',
};
