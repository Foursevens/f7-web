import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { SiteImage } from '../cms';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';
import { getTeamPageData, SiteTeamPageData } from '../team-page';

interface Props extends LayoutData, SiteTeamPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const teamPageData = await getTeamPageData();
  return { props: { ...layoutData, ...teamPageData } };
};

export default function TeamPage({
  mainMenu,
  teamPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Team</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={<SiteImage image={teamPage.hero.image} />}>
          {teamPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {teamPage.hero.title}
            </Title>
          )}
        </Hero2>
        {teamPage.hero.content == null ? null : (
          <Container padding>
            <RichText>{teamPage.hero.content}</RichText>
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
