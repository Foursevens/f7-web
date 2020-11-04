import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Card, RichText, Tag, Title } from '.';
import { DUURZAAMHEID, HERO2, SQUARE500 } from './data';
import { Grid, GridProps } from './grid';

export default {
  title: '2. Molecules / Grid',
  component: Grid,
};

const Template: Story<GridProps> = (argumentz): React.ReactElement => (
  <Grid {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Card key={1} image={DUURZAAMHEID}>
      <Title size="sm">Eenvoudig fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </Card>,
    <Card key={2} image={HERO2}>
      <Title size="sm">Nog veel eenvoudiger fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </Card>,
    <Card key={3} image={SQUARE500}>
      <Title size="sm">Eenvoudig fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </Card>,
  ],
};
