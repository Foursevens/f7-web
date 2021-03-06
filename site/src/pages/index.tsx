import { ButtonLink, Container, Hero1, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { useLocale } from '../cms';
import {
  SiteContentBlockStack,
  SiteConversionBlock,
  SiteImage,
} from '../components';
import { getHomepageData, SiteHomepageData } from '../data';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteHomepageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const homepageData = await getHomepageData();
  return { props: { ...layoutData, ...homepageData } };
};

export default function Homepage({
  homepage: { hero, blocks, conversion },
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer headerBackground="primary2" {...layoutData}>
        <Hero1 image={<SiteImage image={hero.image} />}>
          {hero.title == null ? null : (
            <Title size="xl">{hero.title[locale]}</Title>
          )}
          {hero.content == null ? null : (
            <RichText size="lg">{hero.content[locale]}</RichText>
          )}
          {hero.cta == null ? null : (
            <div>
              <Link href={hero.cta.href} passHref>
                <ButtonLink design="secondary">
                  {hero.cta.text[locale]}
                </ButtonLink>
              </Link>
            </div>
          )}
        </Hero1>
        <SiteContentBlockStack blocks={blocks} reverse />
        {conversion == null ? null : (
          <Container margin>
            <SiteConversionBlock conversion={conversion} />
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
