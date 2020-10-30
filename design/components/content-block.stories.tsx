import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, TextBlock, Title } from '.';
import { ContentBlock, ContentBlockProps } from './content-block';
import {
  DUURZAAMHEID,
  RICH_TEXT,
  SQUARE200,
  SQUARE500,
  SQUARE1500,
} from './data';

export default {
  title: '3. Organisms / ContentBlock',
  component: ContentBlock,
};

const Template: Story<ContentBlockProps> = (argumentz): React.ReactElement => (
  <ContentBlock {...argumentz} />
);

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  children: [
    <TextBlock key="text-block">
      <Title size="md">Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>,
  ],
};

const WithImageStartTemplate: Story<{
  image: React.ReactElement<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >
  >;
}> = ({ image }): React.ReactElement => (
  <ContentBlock>
    {image}
    <TextBlock key="text-block">
      <Title size="md">Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
  </ContentBlock>
);

export const WithImageStartBig = WithImageStartTemplate.bind({});
WithImageStartBig.args = { image: SQUARE1500 };

export const WithImageStartLandscape = WithImageStartTemplate.bind({});
WithImageStartLandscape.args = { image: DUURZAAMHEID };

export const WithImageStartSmall = WithImageStartTemplate.bind({});
WithImageStartSmall.args = { image: SQUARE200 };

export const WithImageStartSquare = WithImageStartTemplate.bind({});
WithImageStartSquare.args = { image: SQUARE500 };

const WithImageEndTemplate: Story<{
  image: React.ReactElement<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >
  >;
}> = ({ image }): React.ReactElement => (
  <ContentBlock>
    <TextBlock key="text-block">
      <Title size="md">Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
    </TextBlock>
    {image}
  </ContentBlock>
);

export const WithImageEndBig = WithImageEndTemplate.bind({});
WithImageEndBig.args = { image: SQUARE1500 };

export const WithImageEndLandscape = WithImageEndTemplate.bind({});
WithImageEndLandscape.args = { image: DUURZAAMHEID };

export const WithImageEndSmall = WithImageEndTemplate.bind({});
WithImageEndSmall.args = { image: SQUARE200 };

export const WithImageEndSquare = WithImageEndTemplate.bind({});
WithImageEndSquare.args = { image: SQUARE500 };
