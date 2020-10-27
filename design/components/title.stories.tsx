import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Title, TitleProps } from './title';

export default {
  title: '1. Atoms / Title',
  component: Title,
};

const Template: Story<TitleProps> = (argumentz): React.ReactElement => (
  <Title {...argumentz} />
);

export const WithFullStop = Template.bind({});
WithFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: true,
};

export const WithLinkStop = Template.bind({});
WithLinkStop.args = {
  children: <a href="/">Eenvoudig fietsparkeren</a>,
  fullStop: true,
};

export const WithoutFullStop = Template.bind({});
WithoutFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: false,
};

export const WithSize1 = Template.bind({});
WithSize1.args = {
  as: 'h1',
  children: 'Eenvoudig fietsparkeren',
  size: 1,
};

export const WithSize2 = Template.bind({});
WithSize2.args = {
  as: 'h2',
  children: 'Digitaal advies',
  size: 2,
};
export const WithSize3 = Template.bind({});
WithSize3.args = {
  as: 'h3',
  children: 'Digitaal voor mens en planeet',
  size: 3,
};
