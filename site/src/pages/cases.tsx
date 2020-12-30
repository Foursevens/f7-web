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

import { useLocale } from '../cms';
import { SiteImage } from '../components';
import { getCasesPageData, SiteCasesPageData } from '../data';
import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData, SiteCasesPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const casesPageData = await getCasesPageData();
  return { props: { ...layoutData, ...casesPageData } };
};

export default function CasesPage({
  cases,
  casesPage: { hero },
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Foursevens Cases</title>
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
        <Container padding>
          <Grid as="ol">
            {cases.map(({ id, slug, image, client, title, introduction }) => (
              <li key={id}>
                <Card image={<SiteImage image={image} />}>
                  {title == null ? null : (
                    <Title as="h3" size="sm">
                      <Link href={`/cases/${slug}`}>
                        <a>{title[locale]}</a>
                      </Link>
                    </Title>
                  )}
                  <Tag>{client}</Tag>
                  {introduction == null ? null : (
                    <RichText>{introduction[locale]}</RichText>
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
