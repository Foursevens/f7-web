import { Menu, MenuItem } from '@f7-web/design';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/Home.module.css';
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
    <div>
      <header>
        <Menu>
          {headerMenu.menuItems.map((item) => (
            <MenuItem key={item.id} highlight={item.highlight}>
              <Link href={item.href}>{item.title}</Link>
            </MenuItem>
          ))}
        </Menu>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by{' '}
          <img alt="Vercel Logo" className={styles.logo} src="/vercel.svg" />
        </a>
      </footer>
    </div>
  );
}
