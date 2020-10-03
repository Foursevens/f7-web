import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import {
  MainLayoutData,
  MainLayoutContainer,
  getMainLayoutData,
} from '../../layout';

interface Props extends MainLayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getMainLayoutData();
  return { props: layoutData };
};

export default function CaseDetailPage({
  headerMenu,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <Container>
          <h2>Test Case</h2>
        </Container>
      </MainLayoutContainer>
    </>
  );
}
