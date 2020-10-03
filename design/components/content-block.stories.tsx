import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import image from './assets/duurzaamheid.png';
import { ContentBlock, ContentBlockProps } from './content-block';
import { LOREM } from './data';

export default {
  title: 'Example/ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (args): React.ReactElement => (
  <ContentBlock {...args} />
);

export const WithImageAtStart = Template.bind({});
WithImageAtStart.args = {
  content: LOREM,
  image,
  imagePosition: 'start',
  title: 'Lorem Ipsum',
};

export const WithImageAtEnd = Template.bind({});
WithImageAtEnd.args = {
  content: LOREM,
  image,
  imagePosition: 'end',
  title: 'Lorem Ipsum',
};

export const WithImageNotLoading = Template.bind({});
WithImageNotLoading.args = {
  content: LOREM,
  image: 'not-found',
  imagePosition: 'start',
  title: 'Lorem Ipsum',
};

export const WithCta = Template.bind({});
WithCta.args = {
  content: LOREM,
  cta: { href: '/', text: 'Go on' },
  image,
  title: 'Lorem Ipsum',
};

export const WithTag = Template.bind({});
WithTag.args = {
  content: LOREM,
  image,
  tag: 'Lorem Ipsum is simply dummy text',
  title: 'Lorem Ipsum',
};
