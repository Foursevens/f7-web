import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { getJobsPageData, SiteJobsPageData } from '../jobs-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteJobsPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const jobsPageData = await getJobsPageData();
  return { props: { ...layoutData, ...jobsPageData } };
};

export default function JobsPage({
  mainMenu,
  jobsPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Jobs</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={jobsPage.hero.image}>
          {jobsPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {jobsPage.hero.title}
            </Title>
          )}
        </Hero2>
        {jobsPage.hero.content == null ? null : (
          <Container padding>
            <RichText>{jobsPage.hero.content}</RichText>
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
