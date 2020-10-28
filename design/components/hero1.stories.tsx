import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import hero1 from '../stories-assets/hero1.png';
import { ButtonLink } from './button-link';
import { Hero1, Hero1Props } from './hero1';
import { RichText } from './rich-text';
import { Title } from './title';

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
  image: { url: hero1 },
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
