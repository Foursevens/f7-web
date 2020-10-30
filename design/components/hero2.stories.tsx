import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Title } from '.';
import { HERO2 } from './data';
import { Hero2, Hero2Props } from './hero2';

export default {
  title: '3. Organisms / Hero 2',
  component: Hero2,
};

const Template: Story<Hero2Props> = (argumentz): React.ReactElement => (
  <div style={{ marginTop: 100 }}>
    <Hero2 {...argumentz} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <Title size="lg">Lorem Ipsum</Title>,
  image: HERO2,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  children: <Title size="lg">Lorem Ipsum</Title>,
};
