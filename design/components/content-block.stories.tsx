import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import begeleiding from '../assets/begeleiding.png';
import duurzaamheid from '../assets/duurzaamheid.png';
import { ContentBlock, ContentBlockProps } from './content-block';
import { RICH_TEXT } from './data';

export default {
  title: 'Example/ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (args): React.ReactElement => (
  <ContentBlock {...args} />
);

export const WithText = Template.bind({});
WithText.args = {
  content: RICH_TEXT,
};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  content: RICH_TEXT,
  title: 'Lorem Ipsum',
};

export const WithTagTitleAndText = Template.bind({});
WithTagTitleAndText.args = {
  content: RICH_TEXT,
  tag: 'Lorem Ipsum is simply dummy text',
  title: 'Lorem Ipsum',
};

export const WithImageAtStart = Template.bind({});
WithImageAtStart.args = {
  content: RICH_TEXT,
  cta: { href: '/', text: 'Go on' },
  image: { position: 'start', url: duurzaamheid },
  tag: 'Lorem Ipsum is simply dummy text',
  title: 'Lorem Ipsum',
};

export const WithImageAtEnd = Template.bind({});
WithImageAtEnd.args = {
  content: RICH_TEXT,
  cta: { href: '/', text: 'Go on' },
  image: { position: 'end', url: duurzaamheid },
  tag: 'Lorem Ipsum is simply dummy text',
  title: 'Lorem Ipsum',
};

export const WithImageNotLoading = Template.bind({});
WithImageNotLoading.args = {
  content: RICH_TEXT,
  image: { position: 'start', url: 'not-found' },
};

export const WithVeryHighImage = Template.bind({});
WithVeryHighImage.args = {
  content: RICH_TEXT,
  image: { position: 'end', url: begeleiding },
};
