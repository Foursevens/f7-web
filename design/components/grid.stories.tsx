import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Card, RichText, Tag, Title } from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
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
  children: Array.from({ length: 5 }, (item, index) => (
    <Card key={index} image={{ width: 600, height: 420, url: duurzaamheid }}>
      <Title size="sm">Eenvoudig fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </Card>
  )),
};
