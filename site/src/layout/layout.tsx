import { Container, Header, Menu, MenuItem } from '@f7-web/design';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { SiteMenuModel } from '../cms';

interface Props {
  children: React.ReactNode;
  mainMenu: SiteMenuModel;
}

export function LayoutContainer({
  children,
  mainMenu,
}: Props): React.ReactElement {
  const router = useRouter();
  const isActive = (href: string): boolean => router.pathname.startsWith(href);
  return (
    <>
      <Container>
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
    </>
  );
}
