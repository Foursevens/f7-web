import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Tag, Title } from '.';
import { HeroContact, HeroContactProps } from './hero-contact';

export default {
  title: '3. Organisms / Hero Contact',
  component: HeroContact,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<HeroContactProps> = (argumentz): React.ReactElement => (
  <HeroContact {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
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
    </>
  ),
};
