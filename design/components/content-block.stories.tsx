import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import begeleiding from './assets/begeleiding.png';
import duurzaamheid from './assets/duurzaamheid.png';
import { ContentBlock, ContentBlockProps } from './content-block';
import { RICH_TEXT } from './data';

export default {
  title: 'Example/ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (args): React.ReactElement => (
  <ContentBlock {...args} />
);

export const WithImageAtStart = Template.bind({});
WithImageAtStart.args = {
  content: RICH_TEXT,
  image: { position: 'start', url: duurzaamheid },
  title: 'Lorem Ipsum',
};

export const WithImageAtEnd = Template.bind({});
WithImageAtEnd.args = {
  content: RICH_TEXT,
  image: { position: 'end', url: duurzaamheid },
  title: 'Lorem Ipsum',
};

export const WithImageNotLoading = Template.bind({});
WithImageNotLoading.args = {
  content: RICH_TEXT,
  image: { position: 'start', url: 'not-found' },
  title: 'Lorem Ipsum',
};

export const WithVeryHighImage = Template.bind({});
WithVeryHighImage.args = {
  content: RICH_TEXT,
  image: { position: 'end', url: begeleiding },
  title: 'Lorem Ipsum',
};

export const WithTagAndCta = Template.bind({});
WithTagAndCta.args = {
  content: RICH_TEXT,
  cta: { href: '/', text: 'Go on' },
  image: { url: duurzaamheid },
  tag: 'Lorem Ipsum is simply dummy text',
  title: 'Lorem Ipsum',
};
