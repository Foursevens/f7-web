import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import LinkedInIcon from '../assets/linkedin.svg';
import EmailIcon from '../assets/mail.svg';
import PhoneIcon from '../assets/telephone.svg';
import { Footer, FooterProps } from './footer';
import { Separator } from './separator';

export default {
  title: '3. Organisms / Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<FooterProps> = (argumentz): React.ReactElement => (
  <Footer {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Footer.Section key="contact-us">
      <header>Contact Us</header>
      <main>
        <Footer.AddressList>
          <li>
            Rue du Houblon 63
            <br />
            1000 Brussels
            <br />
            Belgium
          </li>
          <li>
            Kasteellaan 349A
            <br />
            9000 Gent
            <br />
            Belgium
          </li>
        </Footer.AddressList>
        <Separator />
        <Footer.ContactList>
          <li>
            <EmailIcon />
            <a href="mailto:info@foursevens.be">info@foursevens.be</a>
          </li>
          <li>
            <PhoneIcon />
            <a href="tel:+3234508030">+32 3 450 80 30</a>
          </li>
          <li>
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/company/foursevens"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </Footer.ContactList>
      </main>
    </Footer.Section>,
    <Separator key="separator-1" />,
    <Footer.Section key="what-we-do">
      <header>What we do</header>
      <main>
        <Footer.MenuList>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/approach">Approach</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
        </Footer.MenuList>
      </main>
    </Footer.Section>,
    <Separator key="separator-2" />,
    <Footer.Section key="who-we-are">
      <header>Who we are</header>
      <main>
        <Footer.MenuList>
          <li>
            <a href="/our-dna">Our DNA</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/stories">Stories</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </Footer.MenuList>
      </main>
    </Footer.Section>,
  ],
};
