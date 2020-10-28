import React from 'react';

import {
  ButtonLink,
  Container,
  ContentBlock,
  Header,
  Hero1,
  Hero2,
  Hero3,
  Menu,
  MenuItem,
  RichText,
  Tag,
  Title,
} from '.';
import duurzaamheid from '../stories-assets/duurzaamheid.png';
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
    <Hero2 image={{ width: 2300, height: 818, url: hero2 }}>
      <Title size="lg">Our services</Title>
    </Hero2>
  </>
);

export const Level3 = (): React.ReactElement => (
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
    <Hero3 image={{ width: 600, height: 420, url: duurzaamheid }}>
      <ContentBlock>
        <Title size="lg">Eenvoudig fietsparkeren</Title>
        <Tag>Cyclo</Tag>
        <RichText>
          {
            '<p>We maakten organisationele groei mogelijk en overwichtelijk via digitalisering van bestaande IT processen.</p>'
          }
        </RichText>
      </ContentBlock>
    </Hero3>
  </>
);
