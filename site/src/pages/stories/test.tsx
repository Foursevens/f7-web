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

export default function StoryDetailPage({
  headerMenu,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Story</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <h2>Test Story</h2>
      </MainLayoutContainer>
    </>
  );
}
