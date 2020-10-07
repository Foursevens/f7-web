import React from 'react';

import hero1 from '../stories-assets/hero1.png';
import logo from '../stories-assets/logo-full.png';
import { ButtonLink } from './button-link';
import { Container } from './container';
import { Header } from './header';
import { Hero1 } from './hero1';
import { Menu, MenuItem } from './menu';
import { RichText } from './rich-text';
import { Title } from './title';

export default {
  title: '4. Templates / Level 1',
  component: Container,
  parameters: { layout: 'fullscreen' },
};

export const Primary = (): React.ReactElement => (
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
      <Title as="h1" size={1}>
        Digitaal voor mens en planeet
      </Title>
      <RichText>
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
