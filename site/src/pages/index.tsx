import { ButtonLink, Container, Hero1, RichText, Title } from '@f7-web/design';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { SiteContentBlockStack, SiteConversionBlock, SiteImage } from '../cms';
import { getHomepageData, SiteHomepageData } from '../homepage';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteHomepageData {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const homepageData = await getHomepageData();
  return { props: { ...layoutData, ...homepageData }, revalidate: 60 };
};

export default function Homepage({
  homepage: { hero, blocks, conversion },
  ...layoutData
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer headerBackground="primary2" {...layoutData}>
        <Hero1 image={<SiteImage image={hero.image} />}>
          {hero.title == null ? null : <Title size="xl">{hero.title}</Title>}
          {hero.content == null ? null : (
            <RichText size="lg">{hero.content}</RichText>
          )}
          {hero.cta == null ? null : (
            <div>
              <Link href={hero.cta.href} passHref>
                <ButtonLink background="secondary">{hero.cta.text}</ButtonLink>
              </Link>
            </div>
          )}
        </Hero1>
        <SiteContentBlockStack blocks={blocks} reverse />
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
