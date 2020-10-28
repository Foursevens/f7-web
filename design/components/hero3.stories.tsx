import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Title, RichText, ContentBlock, Tag } from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
import { RICH_TEXT } from './data';
import { Hero3, Hero3Props } from './hero3';

export default {
  title: '3. Organisms / Hero 3',
  component: Hero3,
};

const Template: Story<Hero3Props> = (argumentz): React.ReactElement => (
  <Hero3 {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <ContentBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </ContentBlock>
  ),
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  children: (
    <ContentBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </ContentBlock>
  ),
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <ContentBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
      <RichText>{RICH_TEXT}</RichText>
      <RichText>{RICH_TEXT}</RichText>
      <RichText>{RICH_TEXT}</RichText>
    </ContentBlock>
  ),
};
