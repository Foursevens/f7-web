import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, ContainerStack, RichText, Tag, Title } from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
import square1500 from '../stories-assets/square-1500.png';
import square200 from '../stories-assets/square-200.png';
import square500 from '../stories-assets/square-500.png';
import { ContentBlock } from './content-block';
import { RICH_TEXT } from './data';
import { ImageProps } from './types';

export default {
  title: '3. Organisms / ContentBlock',
  component: ContentBlock,
};

const Template: Story<ImageProps> = (image): React.ReactElement => (
  <ContainerStack padding>
    <ContentBlock image={{ position: 'start', ...image }}>
      <Title size="md">Lorem Ipsum</Title>
      <Tag>Lorem Ipsum is simply dummy text</Tag>
      <RichText>{RICH_TEXT}</RichText>
      <div>
        <ButtonLink>Go on</ButtonLink>
      </div>
    </ContentBlock>
    <ContentBlock image={{ position: 'end', ...image }}>
      <Title size="md">Lorem Ipsum</Title>
      <Tag>Lorem Ipsum is simply dummy text</Tag>
      <RichText>{RICH_TEXT}</RichText>
      <div>
        <ButtonLink>Go on</ButtonLink>
      </div>
    </ContentBlock>
  </ContainerStack>
);

export const WithImagesNotLoading = Template.bind({});
WithImagesNotLoading.args = { url: 'not-found', width: 200, height: 200 };

export const WithSquareImages = Template.bind({});
WithSquareImages.args = { url: square500, width: 500, height: 500 };

export const WithNonSquareImages = Template.bind({});
WithNonSquareImages.args = { url: duurzaamheid, width: 600, height: 420 };

export const WithVeryBigImages = Template.bind({});
WithVeryBigImages.args = { url: square1500, width: 1500, height: 1500 };

export const WithVerySmallImages = Template.bind({});
WithVerySmallImages.args = { url: square200, width: 200, height: 200 };
