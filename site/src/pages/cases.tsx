import {
  Card,
  Container,
  Grid,
  Hero2,
  RichText,
  Tag,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { getCasesPageData, SiteCasesPageData } from '../cases-page';
import { SiteImage } from '../cms';
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
  cases,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Cases</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={<SiteImage image={casesPage.hero.image} />}>
          {casesPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {casesPage.hero.title}
            </Title>
          )}
        </Hero2>
        {casesPage.hero.content == null ? null : (
          <Container padding>
            <RichText>{casesPage.hero.content}</RichText>
          </Container>
        )}
        <Container>
          <Grid as="ol">
            {cases.map(({ id, slug, image, title, tagline, introduction }) => (
              <li key={id}>
                <Card image={<SiteImage image={image} />}>
                  {title == null ? null : (
                    <Title as="h3" size="sm">
                      <Link href={`/cases/${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </Title>
                  )}
                  {tagline == null ? null : <Tag>{tagline}</Tag>}
                  {introduction == null ? null : (
                    <RichText>{introduction}</RichText>
                  )}
                </Card>
              </li>
            ))}
          </Grid>
        </Container>
      </LayoutContainer>
    </>
  );
}
