import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { getAboutPageData, SiteAboutPageData } from '../about-page';
import {
  SiteContentBlockStack,
  SiteConversionBlock,
  SiteImage,
  useLocale,
} from '../cms';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteAboutPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const aboutPageData = await getAboutPageData();
  return { props: { ...layoutData, ...aboutPageData } };
};

export default function AboutPage({
  aboutPage: { hero, blocks, conversion },
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

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
              {hero.title[locale]}
            </Title>
          )}
        </Hero2>
        {hero.content == null ? null : (
          <Container padding>
            <RichText>{hero.content[locale]}</RichText>
          </Container>
        )}
        <SiteContentBlockStack blocks={blocks} />
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
