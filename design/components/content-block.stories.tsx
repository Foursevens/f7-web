import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Container } from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
import square1500 from '../stories-assets/square-1500.png';
import square200 from '../stories-assets/square-200.png';
import square500 from '../stories-assets/square-500.png';
import { ButtonLink } from './button-link';
import { ContentBlock, ContentBlockProps } from './content-block';
import { RICH_TEXT } from './data';
import { RichText } from './rich-text';
import { Tag } from './tag';
import { Title } from './title';
import { ImageProps } from './types';

export default {
  title: '3. Organisms / ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (argumentz): React.ReactElement => (
  <ContentBlock {...argumentz} />
);

export const WithText = Template.bind({});
WithText.args = {
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  children: (
    <>
      <Title size={2}>Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
    </>
  ),
};

export const WithTagTitleAndText = Template.bind({});
WithTagTitleAndText.args = {
  children: (
    <>
      <Title size={2}>Lorem Ipsum</Title>
      <Tag>Lorem Ipsum is simply dummy text</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </>
  ),
};

export const WithTitleTextAndCta = Template.bind({});
WithTitleTextAndCta.args = {
  children: (
    <>
      <Title size={2}>Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
      <div>
        <ButtonLink>Go on</ButtonLink>
      </div>
    </>
  ),
};

const WithImagesTemplate: Story<ImageProps> = (image): React.ReactElement => (
  <>
    <Container background="white1" spacing="xlarge">
      <ContentBlock image={{ position: 'start', ...image }}>
        <Title size={2}>Lorem Ipsum</Title>
        <Tag>Lorem Ipsum is simply dummy text</Tag>
        <RichText>{RICH_TEXT}</RichText>
        <div>
          <ButtonLink>Go on</ButtonLink>
        </div>
      </ContentBlock>
    </Container>
    <Container background="white2" spacing="xlarge">
      <ContentBlock image={{ position: 'end', ...image }}>
        <Title size={2}>Lorem Ipsum</Title>
        <Tag>Lorem Ipsum is simply dummy text</Tag>
        <RichText>{RICH_TEXT}</RichText>
        <div>
          <ButtonLink>Go on</ButtonLink>
        </div>
      </ContentBlock>
    </Container>
  </>
);

export const WithImagesNotLoading = WithImagesTemplate.bind({});
WithImagesNotLoading.args = { url: 'not-found', width: 200, height: 200 };

export const WithSquareImages = WithImagesTemplate.bind({});
WithSquareImages.args = { url: square500, width: 500, height: 500 };

export const WithNonSquareImages = WithImagesTemplate.bind({});
WithNonSquareImages.args = { url: duurzaamheid, width: 600, height: 420 };

export const WithVeryBigImages = WithImagesTemplate.bind({});
WithVeryBigImages.args = { url: square1500, width: 1500, height: 1500 };

export const WithVerySmallImages = WithImagesTemplate.bind({});
WithVerySmallImages.args = { url: square200, width: 200, height: 200 };
