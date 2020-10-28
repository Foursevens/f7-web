import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, Tag, Title } from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
import { CardProps, Card } from './card';

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
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </>
  ),
};

export const WithWhite2 = Template.bind({});
WithWhite2.args = {
  background: 'white2',
  image: { width: 600, height: 420, url: duurzaamheid },
  children: (
    <>
      <Tag>Theme</Tag>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </>
  ),
};
