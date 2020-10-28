import { Container, Hero2, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { getCasesPageData, SiteCasesPageData } from '../cases-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteCasesPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const casesPageData = await getCasesPageData();
  return { props: { ...layoutData, ...casesPageData } };
};

export default function CasesPage({
  mainMenu,
  casesPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Cases</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={casesPage.hero.image}>
          {casesPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {casesPage.hero.title}
            </Title>
          )}
        </Hero2>
        {casesPage.hero.content == null ? null : (
          <Container spacing="xlarge">
            <RichText>{casesPage.hero.content}</RichText>
          </Container>
        )}
        <Container>
          <ul>
            <li>
              <Link href="/cases/test">
                <a>Test case</a>
              </Link>
            </li>
          </ul>
        </Container>
      </LayoutContainer>
    </>
  );
}
