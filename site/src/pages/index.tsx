import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
  MainLayoutData,
  MainLayoutContainer,
  getMainLayoutData,
} from '../layout';

interface Props extends MainLayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getMainLayoutData();
  return { props: layoutData };
};

export default function Home({ headerMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <p>Homepage</p>
        <ul>
          <li>
            <Link href="/cases/test">
              <a>Test case</a>
            </Link>
          </li>
          <li>
            <Link href="/stories/test">
              <a>Test story</a>
            </Link>
          </li>
        </ul>
      </MainLayoutContainer>
    </>
  );
}
