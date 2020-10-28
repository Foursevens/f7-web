import React from 'react';

import {
  ButtonLink,
  Container,
  Header,
  Hero1,
  Hero2,
  Menu,
  MenuItem,
  RichText,
  Title,
} from '.';
import hero1 from '../stories-assets/hero1.png';
import hero2 from '../stories-assets/hero2.png';
import logo from '../stories-assets/logo-full.png';

export default {
  title: '4. Templates / Layout',
  component: Container,
  parameters: { layout: 'fullscreen' },
};

export const Level1 = (): React.ReactElement => (
  <>
    <Container background="primary2">
      <Header>
        <img alt="Foursevens logo" src={logo} />
        <Menu>
          <MenuItem key="key-1">
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem key="key-2" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <Hero1 image={{ url: hero1 }}>
      <Title size="xl">Digitaal voor mens en planeet</Title>
      <RichText size="lg">
        {
          '<p>Sustainable digital solutions with positive impact on people and planet.</p>'
        }
      </RichText>
      <div>
        <ButtonLink background="secondary">Ontdek onze cases</ButtonLink>
      </div>
    </Hero1>
  </>
);

export const Level2 = (): React.ReactElement => (
  <>
    <Container>
      <Header>
        <img alt="Foursevens logo" src={logo} />
        <Menu>
          <MenuItem key="key-1">
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem key="key-2" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <Hero2 image={{ url: hero2 }}>
      <Title size="lg">Our services</Title>
    </Hero2>
  </>
);
