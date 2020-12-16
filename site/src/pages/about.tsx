import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { getAboutPageData, SiteAboutPageData } from '../about-page';
import { SiteConversionBlock, SiteImage } from '../cms';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteAboutPageData {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const aboutPageData = await getAboutPageData();
  return { props: { ...layoutData, ...aboutPageData }, revalidate: 60 };
};

export default function AboutPage({
  aboutPage: { hero, conversion },
  ...layoutData
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens About</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
        <Hero2 image={<SiteImage image={hero.image} />}>
          {hero.title == null ? null : (
            <Title as="h2" size="md">
              {hero.title}
            </Title>
          )}
        </Hero2>
        {hero.content == null ? null : (
          <Container padding>
            <RichText>{hero.content}</RichText>
          </Container>
        )}
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
