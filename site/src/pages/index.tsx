import { ButtonLink, Hero1, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { getHomepageData, SiteHomepageData } from '../homepage';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteHomepageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const homepageData = await getHomepageData();
  return { props: { ...layoutData, ...homepageData } };
};

export default function Homepage({
  homepage,
  mainMenu,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero1 image={homepage.hero.image}>
          {homepage.hero.title == null ? null : (
            <Title as="h1" size={1}>
              {homepage.hero.title}
            </Title>
          )}
          {homepage.hero.content == null ? null : (
            <RichText size="lg">{homepage.hero.content}</RichText>
          )}
          {homepage.hero.cta == null ? null : (
            <div>
              <Link href={homepage.hero.cta.href} passHref>
                <ButtonLink background="secondary">
                  {homepage.hero.cta.text}
                </ButtonLink>
              </Link>
            </div>
          )}
        </Hero1>
      </LayoutContainer>
    </>
  );
}
