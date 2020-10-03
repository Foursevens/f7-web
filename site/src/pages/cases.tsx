import { Container } from '@f7-web/design';
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

export default function CasesPage({ headerMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Cases</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <Container>
          <h2>Cases</h2>
          <ul>
            <li>
              <Link href="/cases/test">
                <a>Test case</a>
              </Link>
            </li>
          </ul>
        </Container>
      </MainLayoutContainer>
    </>
  );
}
