import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Title, TitleProps } from './title';

export default {
  title: 'Example/Title',
  component: Title,
};

const Template: Story<TitleProps> = (args): React.ReactElement => (
  <Title {...args} />
);

export const size1 = Template.bind({});
size1.args = {
  children: 'Eenvoudig fietsparkeren',
  size: 'size1',
  fullStop: false,
};

export const size2 = Template.bind({});
size2.args = {
  children: 'Digitaal advies',
  size: 'size2',
  fullStop: false,
};
export const size3 = Template.bind({});
size3.args = {
  children: 'Digitaal voor mens en planeet',
  size: 'size3',
  fullStop: false,
};
