import { HeroContact, Map, Tag, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { useLocale } from '../cms';
import { getContactPageData, SiteContactPageData } from '../data';
import { joinStringsWithLineBreaks } from '../jsx-utils';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteContactPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const contactPageData = await getContactPageData();
  return { props: { ...layoutData, ...contactPageData } };
};

export default function ContactPage({
  contact,
  contactPage,
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Foursevens Contact</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer
        contact={contact}
        headerBackground="primary2"
        {...layoutData}
      >
        <HeroContact>
          {contactPage.title.map((line) => (
            <Title key={line[locale]} size="lg">
              {line[locale]}
            </Title>
          ))}
          <ul>
            {contact.email == null ? null : (
              <li>
                <HeroContact.Channel>
                  <Tag>Mail us</Tag>
                  <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </HeroContact.Channel>
              </li>
            )}
            {contact.phone == null ? null : (
              <li>
                <HeroContact.Channel>
                  <Tag>Call us</Tag>
                  <p>
                    <a href={`tel:${contact.phone.replace(' ', '')}`}>
                      {contact.phone}
                    </a>
                  </p>
                </HeroContact.Channel>
              </li>
            )}
            {contact.address.length === 0 ? null : (
              <li>
                <HeroContact.Channel>
                  <Tag>Address</Tag>
                  <ul>
                    {contact.address.map(({ lines }) => (
                      <li>
                        {joinStringsWithLineBreaks(
                          lines.map((line) => line[locale]),
                        )}
                      </li>
                    ))}
                  </ul>
                </HeroContact.Channel>
              </li>
            )}
            {contact.socialMedia.length === 0 ? null : (
              <li>
                <HeroContact.Channel>
                  <Tag>Social Media</Tag>
                  <ul>
                    {contact.socialMedia.map(({ link, title }) => (
                      <li key={title}>
                        <a href={link} rel="noreferrer" target="_blank">
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </HeroContact.Channel>
              </li>
            )}
          </ul>
        </HeroContact>
        <Map>
          <img
            alt="foursevens address on map"
            height={690}
            src="/map@2x.png"
            width={3360}
          />
        </Map>
      </LayoutContainer>
    </>
  );
}
