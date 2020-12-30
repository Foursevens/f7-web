import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, Title, Tag, ButtonLink } from '.';
import { RICH_TEXT } from './data';
import { TextBlock, TextBlockProps } from './text-block';

export default {
  title: '3. Organisms / Text Block',
  component: TextBlock,
};

const Template: Story<TextBlockProps> = (argumentz): React.ReactElement => (
  <TextBlock {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  children: (
    <>
      <Title size="md">Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
    </>
  ),
};

export const WithTagTitleAndText = Template.bind({});
WithTagTitleAndText.args = {
  children: (
    <>
      <Title size="md">Lorem Ipsum</Title>
      <Tag>Lorem Ipsum is simply dummy text</Tag>
      <RichText>{RICH_TEXT}</RichText>
    </>
  ),
};

export const WithTitleTextAndCta = Template.bind({});
WithTitleTextAndCta.args = {
  children: (
    <>
      <Title size="md">Lorem Ipsum</Title>
      <RichText>{RICH_TEXT}</RichText>
      <div>
        <ButtonLink design="secondary">Go on</ButtonLink>
      </div>
    </>
  ),
};
