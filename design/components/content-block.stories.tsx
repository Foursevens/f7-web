import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import begeleiding from '../stories-assets/begeleiding.png';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
import { ButtonLink } from './button-link';
import { ContentBlock, ContentBlockProps } from './content-block';
import { RICH_TEXT } from './data';
import { RichText } from './rich-text';
import { Tag } from './tag';
import { Title } from './title';

export default {
  title: '3. Organisms / ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (args): React.ReactElement => (
  <ContentBlock {...args} />
);

export const WithText = Template.bind({});
WithText.args = {
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  children: [
    <Title size={2}>Lorem Ipsum</Title>,
    <RichText>{RICH_TEXT}</RichText>,
  ],
};

export const WithTagTitleAndText = Template.bind({});
WithTagTitleAndText.args = {
  children: [
    <Title size={2}>Lorem Ipsum</Title>,
    <Tag>Lorem Ipsum is simply dummy text</Tag>,
    <RichText>{RICH_TEXT}</RichText>,
  ],
};

export const WithTitleTextAndCta = Template.bind({});
WithTitleTextAndCta.args = {
  children: [
    <Title size={2}>Lorem Ipsum</Title>,
    <RichText>{RICH_TEXT}</RichText>,
    <div>
      <ButtonLink>Go on</ButtonLink>
    </div>,
  ],
};

export const WithImageAtStart = Template.bind({});
WithImageAtStart.args = {
  children: [
    <Title as="h3" size={2}>
      Lorem Ipsum
    </Title>,
    <Tag>Lorem Ipsum is simply dummy text</Tag>,
    <RichText>{RICH_TEXT}</RichText>,
    <div>
      <ButtonLink>Go on</ButtonLink>
    </div>,
  ],
  image: { position: 'start', url: duurzaamheid },
};

export const WithImageAtEnd = Template.bind({});
WithImageAtEnd.args = {
  children: [
    <Title as="h3" size={2}>
      Lorem Ipsum
    </Title>,
    <Tag>Lorem Ipsum is simply dummy text</Tag>,
    <RichText>{RICH_TEXT}</RichText>,
    <div>
      <ButtonLink>Go on</ButtonLink>
    </div>,
  ],
  image: { position: 'end', url: duurzaamheid },
};

export const WithImageNotLoading = Template.bind({});
WithImageNotLoading.args = {
  children: [<RichText>{RICH_TEXT}</RichText>],
  image: { position: 'start', url: 'not-found' },
};

export const WithVeryHighImage = Template.bind({});
WithVeryHighImage.args = {
  children: [<RichText>{RICH_TEXT}</RichText>],
  image: { position: 'end', url: begeleiding },
};
