import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { SiteImage, useLocale } from '../cms';
import { getJobsPageData, SiteJobsPageData } from '../jobs-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteJobsPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const jobsPageData = await getJobsPageData();
  return { props: { ...layoutData, ...jobsPageData } };
};

export default function JobsPage({
  jobsPage: { hero },
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Foursevens Jobs</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
        <Hero2 image={<SiteImage image={hero.image} />}>
          {hero.title == null ? null : (
            <Title as="h2" size="md">
              {hero.title[locale]}
            </Title>
          )}
        </Hero2>
        {hero.content == null ? null : (
          <Container padding>
            <RichText>{hero.content[locale]}</RichText>
          </Container>
        )}
        <Container margin>
          <Link href="/jobs/senior-digital-analyst">
            Senior Digital Analyst
          </Link>
        </Container>
      </LayoutContainer>
    </>
  );
}
