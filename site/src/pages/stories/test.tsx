import { Container } from '@f7-web/design';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

interface Props extends LayoutData {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const layoutData = await getLayoutData();
  return { props: layoutData, revalidate: 60 };
};

export default function StoryDetailPage({
  ...layoutData
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Story</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
        <Container>
          <h2>Test Story</h2>
        </Container>
      </LayoutContainer>
    </>
  );
}
