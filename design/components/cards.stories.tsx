import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import duurzaamheid from './assets/duurzaamheid.png';
import { CardProps, Cards, ContentContainer } from './cards';
import { RICH_TEXT, SERVICE } from './data';
import { RichText } from './rich-text';
import { Tag } from './tag';
import { Title } from './title';

export default {
  title: 'Example/Cards',
  component: Cards,
};

const Template: Story<CardProps> = (args): React.ReactElement => (
  <Cards {...args} />
);

export const CaseWithImage = Template.bind({});
CaseWithImage.args = {
  href: '/',
  children: [
    <img alt="decorative" src={duurzaamheid} />,
    <ContentContainer>
      <main>
        <Tag>Cyclo</Tag>
        <Title as="h3" size={3}>
          Eenvoudig fietsparkeren
        </Title>
        <RichText>{RICH_TEXT}</RichText>
      </main>
    </ContentContainer>,
  ],
};

export const StoriesWithImage = Template.bind({});
StoriesWithImage.args = {
  href: '/',
  children: [
    <img alt="decorative" src={duurzaamheid} />,
    <ContentContainer>
      <main>
        <Tag>Theme</Tag>
        <Title as="h3" size={3}>
          Eenvoudig fietsparkeren
        </Title>
        <RichText>{SERVICE}</RichText>
      </main>
    </ContentContainer>,
  ],
};
