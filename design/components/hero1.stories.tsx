import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, RichText, Title } from '.';
import { HERO1 } from './data';
import { Hero1, Hero1Props } from './hero1';

export default {
  title: '3. Organisms / Hero 1',
  component: Hero1,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<Hero1Props> = (argumentz): React.ReactElement => (
  <Hero1 {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Title size="xl">Digitaal voor mens en planeet</Title>
      <RichText>
        {
          '<p>Sustainable digital solutions with positive impact on people and planet.</p>'
        }
      </RichText>
      <div>
        <ButtonLink background="secondary">Ontdek onze cases</ButtonLink>
      </div>
    </>
  ),
  image: HERO1,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  children: (
    <>
      <Title size="xl">Digitaal voor mens en planeet</Title>
      <RichText>
        {
          '<p>Sustainable digital solutions with positive impact on people and planet.</p>'
        }
      </RichText>
      <div>
        <ButtonLink background="secondary">Ontdek onze cases</ButtonLink>
      </div>
    </>
  ),
};
