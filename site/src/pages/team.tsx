import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { useLocale } from '../cms';
import { SiteConversionBlock, SiteImage } from '../components';
import { getTeamPageData, SiteTeamPageData } from '../data';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteTeamPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const teamPageData = await getTeamPageData();
  return { props: { ...layoutData, ...teamPageData } };
};

export default function TeamPage({
  teamPage: { hero, conversion },
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Foursevens Team</title>
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
        {conversion == null ? null : (
          <Container margin>
            <SiteConversionBlock conversion={conversion} />
          </Container>
        )}
        <Container margin>
          <Link href="/team/dieter">Dieter</Link>
        </Container>
      </LayoutContainer>
    </>
  );
}
