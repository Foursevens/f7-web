import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, Tag, TextBlock, Title } from '.';
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
  backLink: <a href="/">Back to overview</a>,
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <TextBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
  ),
};

export const WithOnlyBackLink = Template.bind({});
WithOnlyBackLink.args = {
  backLink: <a href="/">Back to overview</a>,
  children: (
    <TextBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
  ),
};

export const WithOnlyImage = Template.bind({});
WithOnlyImage.args = {
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <TextBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
  ),
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  backLink: <a href="/">Back to overview</a>,
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <TextBlock>
      <Title size="lg">Lorem Ipsum</Title>
      <Tag>Lorem ipsum</Tag>
      <RichText>{RICH_TEXT}</RichText>
      <RichText>{RICH_TEXT}</RichText>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
  ),
};
