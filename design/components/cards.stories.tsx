import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import duurzaamheid from './assets/duurzaamheid.png';
import { CardsProps, Cards } from './cards';
import { RICH_TEXT } from './data';

export default {
  title: 'Example/Cards',
  component: Cards,
};

const Template: Story<CardsProps> = (args): React.ReactElement => (
  <Cards {...args} />
);

export const CaseWithImage = Template.bind({});
CaseWithImage.args = {
  service: 'Responsive website',
  image: { url: duurzaamheid },
  tag: 'cyclo',
  title: 'Eenvoudig fietsparkeren',
};

export const StoriesWithImage = Template.bind({});
StoriesWithImage.args = {
  intro: RICH_TEXT,
  image: { url: duurzaamheid },
  tag: 'Theme',
  title: 'Lorem Ipsum',
};
