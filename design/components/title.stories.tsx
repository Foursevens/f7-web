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

export const WithFullStop = Template.bind({});
WithFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: true,
};

export const WithoutFullStop = Template.bind({});
WithoutFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: false,
};

export const WithSize1 = Template.bind({});
WithSize1.args = {
  children: 'Eenvoudig fietsparkeren',
  size: 'size1',
};

export const WithSize2 = Template.bind({});
WithSize2.args = {
  children: 'Digitaal advies',
  size: 'size2',
};
export const WithSize3 = Template.bind({});
WithSize3.args = {
  children: 'Digitaal voor mens en planeet',
  size: 'size3',
};
