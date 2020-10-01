import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import image from './assets/duurzaamheid.png';
import { Container, ContainerProps } from './container';
import { ContentBlock } from './content-block';
import { LOREM } from './data';
import { Paragraph } from './paragraph';

export default {
  title: 'Example/Container',
  component: Container,
};

const Template: Story<ContainerProps> = (args): React.ReactElement => (
  <Container {...args} />
);

export const White1 = Template.bind({});
White1.args = {
  background: 'white1',
  children: <Paragraph>{LOREM}</Paragraph>,
};

export const White2 = Template.bind({});
White2.args = {
  background: 'white2',
  children: <Paragraph>{LOREM}</Paragraph>,
};

export const Primary2 = Template.bind({});
Primary2.args = {
  background: 'primary2',
  children: <Paragraph>{LOREM}</Paragraph>,
};

export const Small = Template.bind({});
Small.args = {
  background: 'primary2',
  children: <Paragraph>{LOREM}</Paragraph>,
  spacing: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  background: 'primary2',
  children: <Paragraph>{LOREM}</Paragraph>,
  spacing: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  background: 'primary2',
  children: <Paragraph>{LOREM}</Paragraph>,
  spacing: 'large',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  background: 'primary2',
  children: <Paragraph>{LOREM}</Paragraph>,
  spacing: 'xlarge',
};

export const WithContentBlock = Template.bind({});
WithContentBlock.args = {
  background: 'primary2',
  children: (
    <ContentBlock
      content={LOREM}
      ctaChildren="Go on"
      ctaHref="/"
      image={image}
      tag="Lorem Ipsum is simply dummy text"
      title="Lorem Ipsum"
    />
  ),
  spacing: 'xlarge',
};
