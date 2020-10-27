import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import duurzaamheid from '../stories-assets/duurzaamheid.png';
import { CardProps, Card } from './card';
import { RichText } from './rich-text';
import { Tag } from './tag';
import { Title } from './title';

export default {
  title: '3. Organisms / Card',
  component: Card,
};

const Template: Story<CardProps> = (argumentz): React.ReactElement => (
  <div style={{ maxWidth: 500 }}>
    <Card {...argumentz} />
  </div>
);

export const WithWhite1 = Template.bind({});
WithWhite1.args = {
  background: 'white1',
  img: duurzaamheid,
  children: (
    <>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <Tag>Theme</Tag>
      <RichText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </RichText>
    </>
  ),
};

export const WithWhite2 = Template.bind({});
WithWhite2.args = {
  background: 'white2',
  img: duurzaamheid,
  children: (
    <>
      <Tag>Theme</Tag>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <RichText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </RichText>
    </>
  ),
};
