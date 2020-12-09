import {
  Container,
  Footer,
  Header,
  Menu,
  MenuItem,
  Separator,
} from '@f7-web/design';
// @ts-expect-error: Cannot find module
import LinkedInIcon from '@f7-web/design/assets/linkedin.svg';
// @ts-expect-error: Cannot find module
import EmailIcon from '@f7-web/design/assets/mail.svg';
// @ts-expect-error: Cannot find module
import PhoneIcon from '@f7-web/design/assets/telephone.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { joinStringsWithLineBreaks } from '../jsx-utils';
import { LayoutData } from './data';

interface Props extends LayoutData {
  children: React.ReactNode;
  headerBackground?: 'primary2' | 'white1';
}

export function LayoutContainer({
  children,
  contact,
  headerBackground,
  layout: { footerMenus, mainMenu },
}: Props): React.ReactElement {
  const router = useRouter();
  const isActive = (href: string): boolean => router.pathname.startsWith(href);
  return (
    <>
      <Container background={headerBackground}>
        <h1 className="sr-only">Foursevens</h1>
        <Header>
          <Link href="/">
            <a>
              <img alt="Foursevens logo" src="/logo-full.png" />
            </a>
          </Link>
          <Menu>
            {mainMenu.items.map(({ id, highlight, link }) => (
              <MenuItem
                key={id}
                active={isActive(link.href) ? 'yes' : 'no'}
                highlight={highlight ? 'yes' : 'no'}
              >
                <Link href={link.href}>{link.text}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Header>
      </Container>
      <main>{children}</main>
      <Footer>
        <Footer.Section key="contact-us">
          <header>Contact Us</header>
          <main>
            <Footer.AddressList>
              {contact.address.map((lines) => (
                <li>{joinStringsWithLineBreaks(lines)}</li>
              ))}
            </Footer.AddressList>
            <Separator />
            <Footer.ContactList>
              {contact.email == null ? null : (
                <li>
                  <EmailIcon />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact.phone == null ? null : (
                <li>
                  <PhoneIcon />
                  <a href={`tel:${contact.phone}.replace(' ', '')`}>
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.socialMedia.map(({ id, link, title }) => (
                <li key={id}>
                  <LinkedInIcon />
                  <a href={link} rel="noreferrer" target="_blank">
                    {title}
                  </a>
                </li>
              ))}
            </Footer.ContactList>
          </main>
        </Footer.Section>
        {footerMenus.map(({ title, items }) => (
          <>
            <Separator />
            <Footer.Section>
              {title == null ? null : <header>{title}</header>}
              <main>
                <Footer.MenuList>
                  {items.map(({ id, link }) => (
                    <li key={id}>
                      <Link href={link.href}>
                        <a>{link.text}</a>
                      </Link>
                    </li>
                  ))}
                </Footer.MenuList>
              </main>
            </Footer.Section>
          </>
        ))}
      </Footer>
    </>
  );
}
