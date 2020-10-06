import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import image from '../assets/duurzaamheid.png';
import { Container, ContainerProps } from './container';
import { ContentBlock } from './content-block';
import { RICH_TEXT } from './data';
import { RichText } from './rich-text';

export default {
  title: '2. Molecules / Container',
  component: Container,
};

const Template: Story<ContainerProps> = (args): React.ReactElement => (
  <Container {...args} />
);

export const White1 = Template.bind({});
White1.args = {
  background: 'white1',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const White2 = Template.bind({});
White2.args = {
  background: 'white2',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const Primary2 = Template.bind({});
Primary2.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const Small = Template.bind({});
Small.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
  spacing: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
  spacing: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
  spacing: 'large',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
  spacing: 'xlarge',
};

export const WithContentBlock = Template.bind({});
WithContentBlock.args = {
  background: 'primary2',
  children: (
    <ContentBlock
      content={RICH_TEXT}
      cta={{ href: '/', text: 'Go on' }}
      image={{ url: image }}
      tag="Lorem Ipsum is simply dummy text"
      title="Lorem Ipsum"
    />
  ),
  spacing: 'xlarge',
};
