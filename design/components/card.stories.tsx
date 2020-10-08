import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import duurzaamheid from './assets/duurzaamheid.png';
import { CardProps, Card } from './card';
import { RichText } from './rich-text';
import { Tag } from './tag';
import { Title } from './title';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template: Story<CardProps> = (args): React.ReactElement => (
  <Card {...args} />
);

export const cardWithImageAndText = Template.bind({});
cardWithImageAndText.args = {
  img: duurzaamheid,
  children: [
    <Tag>Theme</Tag>,
    <Title size={3}>Eenvoudig fietsparkeren</Title>,
    <RichText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </RichText>,
  ],
};

export const cardWithImage = Template.bind({});
cardWithImage.args = {
  img: duurzaamheid,
  children: [
    <Tag>Cyclo</Tag>,
    <Title size={3}>Eenvoudig fietsparkeren</Title>,
    <RichText>Research & Design</RichText>,
  ],
};
