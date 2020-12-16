import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { SiteConversionBlock } from '../../cms';
import {
  SiteJobDetailPageData,
  getJobDetailPageData,
} from '../../job-detail-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

interface Props extends LayoutData, SiteJobDetailPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const layoutData = await getLayoutData();
  const { slug } = context.params as { slug: string };
  const jobDetailPageData = await getJobDetailPageData(slug);
  return { props: { ...layoutData, ...jobDetailPageData } };
};

export default function JobDetailPage({
  jobDetailPage: { conversion },
  ...layoutData
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
