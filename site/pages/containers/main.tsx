import { Menu } from '@f7-web/design';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/Home.module.css';

export interface MenuItem {
  title_en: string;
  href: string;
}

export type Menu = MenuItem[];

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  headerMenu?: Menu;
}

export function MainContainer({
  children,
  headerMenu,
}: Props): React.ReactElement {
  return (
    <div>
      <header>
        <Menu>
          {headerMenu?.map(({ href, title_en }) => (
            <Link href={href}>{title_en}</Link>
          )) ?? []}
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
