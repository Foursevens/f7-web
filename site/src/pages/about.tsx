import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { getAboutPageData, SiteAboutPageData } from '../about-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteAboutPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const aboutPageData = await getAboutPageData();
  return { props: { ...layoutData, ...aboutPageData } };
};

export default function AboutPage({
  mainMenu,
  aboutPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens About</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={aboutPage.hero.image}>
          {aboutPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {aboutPage.hero.title}
            </Title>
          )}
        </Hero2>
        {aboutPage.hero.content == null ? null : (
          <Container padding>
            <RichText>{aboutPage.hero.content}</RichText>
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
