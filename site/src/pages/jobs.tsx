import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  return { props: layoutData };
};

export default function JobsPage({ mainMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Jobs</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Container>
          <h2>Jobs</h2>
        </Container>
      </LayoutContainer>
    </>
  );
}
