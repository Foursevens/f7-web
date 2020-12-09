import React from 'react';

import {
  ButtonLink,
  Container,
  Header,
  Hero1,
  Hero2,
  Hero3,
  HeroContact,
  Map,
  Menu,
  MenuItem,
  RichText,
  Tag,
  TextBlock,
  Title,
} from '.';
import logo from '../stories-assets/logo-full.png';
import { DUURZAAMHEID, HERO1, HERO2, MAP } from './data';

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
          <MenuItem key="1">
            <a href="/">Cases</a>
          </MenuItem>
          <MenuItem key="2" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <Hero1 image={HERO1}>
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
          <MenuItem key="1" active="yes">
            <a href="/">Cases</a>
          </MenuItem>
          <MenuItem key="2" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <Hero2 image={HERO2}>
      <Title size="lg">Cases</Title>
    </Hero2>
  </>
);

export const Level3 = (): React.ReactElement => (
  <>
    <Container>
      <Header>
        <img alt="Foursevens logo" src={logo} />
        <Menu>
          <MenuItem key="1" active="yes">
            <a href="/">Cases</a>
          </MenuItem>
          <MenuItem key="2" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <Hero3 image={DUURZAAMHEID}>
      <TextBlock>
        <Title size="lg">Eenvoudig fietsparkeren</Title>
        <Tag>Cyclo</Tag>
        <RichText>
          {
            '<p>We maakten organisationele groei mogelijk en overwichtelijk via digitalisering van bestaande IT processen.</p>'
          }
        </RichText>
      </TextBlock>
    </Hero3>
  </>
);

export const Contact = (): React.ReactElement => (
  <>
    <Container background="primary2">
      <Header>
        <img alt="Foursevens logo" src={logo} />
        <Menu>
          <MenuItem key="1">
            <a href="/">Cases</a>
          </MenuItem>
          <MenuItem key="2" active="yes" highlight="yes">
            <a href="/">Contact</a>
          </MenuItem>
        </Menu>
      </Header>
    </Container>
    <HeroContact>
      <Title size="lg">Do you have any questions?</Title>
      <Title size="lg">Contact us, or let&apos;s grab a coffee</Title>
      <ul>
        <li>
          <HeroContact.Channel>
            <Tag>Mail us</Tag>
            <p>
              <a href="mailto:info@foursevens.be">info@foursevens.be</a>
            </p>
          </HeroContact.Channel>
        </li>
        <li>
          <HeroContact.Channel>
            <Tag>Call us</Tag>
            <p>
              <a href="tel:+3234508030">+32 3 450 80 30</a>
            </p>
          </HeroContact.Channel>
        </li>
        <li>
          <HeroContact.Channel>
            <Tag>Address</Tag>
            <ul>
              <li>
                Rue du Houblon 63
                <br />
                1000 Brussels
              </li>
              <li>
                Kasteellaan 349A
                <br />
                9000 Gent
              </li>
            </ul>
          </HeroContact.Channel>
        </li>
        <li>
          <HeroContact.Channel>
            <Tag>Social Media</Tag>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/foursevens"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </HeroContact.Channel>
        </li>
      </ul>
    </HeroContact>
    <Map>{MAP}</Map>
  </>
);
