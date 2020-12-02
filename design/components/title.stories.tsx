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

export const WithAutoFullStop = Template.bind({});
WithAutoFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: 'auto',
};

export const WithoutAutoFullStop = Template.bind({});
WithoutAutoFullStop.args = {
  children: 'Do you have questions?',
  fullStop: 'auto',
};

export const WithFullStop = Template.bind({});
WithFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: true,
};

export const WithLinkFullStop = Template.bind({});
WithLinkFullStop.args = {
  children: <a href="/">Eenvoudig fietsparkeren</a>,
  fullStop: true,
};

export const WithoutFullStop = Template.bind({});
WithoutFullStop.args = {
  children: 'Eenvoudig fietsparkeren',
  fullStop: false,
};

export const WithSizeXl = Template.bind({});
WithSizeXl.args = {
  as: 'h1',
  children: 'Eenvoudig fietsparkeren',
  size: 'xl',
};

export const WithSizeLg = Template.bind({});
WithSizeLg.args = {
  as: 'h2',
  children: 'Digitaal advies',
  size: 'lg',
};

export const WithSizeMd = Template.bind({});
WithSizeMd.args = {
  as: 'h3',
  children: 'Digitaal voor mens en planeet',
  size: 'md',
};

export const WithSizeSm = Template.bind({});
WithSizeSm.args = {
  as: 'h3',
  children: 'Digitaal voor mens en planeet',
  size: 'sm',
};
