import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  return { props: layoutData };
};

export default function CasesPage({ mainMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Cases</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
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
      </LayoutContainer>
    </>
  );
}
