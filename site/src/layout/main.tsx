import { Container, Header, Menu, MenuItem } from '@f7-web/design';
import Link from 'next/link';
import React from 'react';

import { MainLayoutMenu } from './data';

interface Props {
  children: React.ReactNode;
  headerMenu: MainLayoutMenu;
}

export function MainLayoutContainer({
  children,
  headerMenu,
}: Props): React.ReactElement {
  return (
    <>
      <Container>
        <h1 className="sr-only">Foursevens</h1>
        <Header>
          <Link href="/">
            <a>
              <img alt="Foursevens logo" src="./logo-full.png" />
            </a>
          </Link>
          <Menu>
            {headerMenu.menuItems.map((item) => (
              <MenuItem key={item.id} highlight={item.highlight}>
                <Link href={item.href}>{item.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Header>
      </Container>
      <main>{children}</main>
    </>
  );
}
