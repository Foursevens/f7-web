import { HeroContact, Tag, Title } from '@f7-web/design';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { getContactPageData, SiteContactPageData } from '../contact-page';
import { joinStringsWithLineBreaks } from '../jsx-utils';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteContactPageData {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const contactPageData = await getContactPageData();
  return { props: { ...layoutData, ...contactPageData }, revalidate: 60 };
};

export default function ContactPage({
  contactPage,
  contact,
  ...layoutData
}: Props): React.ReactElement {
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
          {contactPage.title.map((title) => (
            <Title key={title} size="lg">
              {title}
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
                    {contact.address.map((lines) => (
                      <li>{joinStringsWithLineBreaks(lines)}</li>
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
      </LayoutContainer>
    </>
  );
}
