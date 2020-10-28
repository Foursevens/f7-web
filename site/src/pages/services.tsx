import {
  ButtonLink,
  Container,
  ContentBlock,
  Hero2,
  RichText,
  Tag,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../layout';
import { getServicesPageData, SiteServicesPageData } from '../services-page';

interface Props extends LayoutData, SiteServicesPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const servicesPageData = await getServicesPageData();
  return { props: { ...layoutData, ...servicesPageData } };
};

export default function ServicesPage({
  mainMenu,
  servicesPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Services</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={servicesPage.hero.image}>
          {servicesPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {servicesPage.hero.title}
            </Title>
          )}
        </Hero2>
        {servicesPage.hero.content == null ? null : (
          <Container spacing="xlarge">
            <RichText>{servicesPage.hero.content}</RichText>
          </Container>
        )}
        <Container spacing="xlarge">
          {servicesPage.blocks?.map(
            ({ id, image, title, tagline, content, cta }) => (
              <ContentBlock key={id} image={image}>
                {title == null ? null : (
                  <Title as="h3" size="md">
                    {title}
                  </Title>
                )}
                {tagline == null ? null : <Tag>{tagline}</Tag>}
                {content == null ? null : <RichText>{content}</RichText>}
                {cta == null ? null : (
                  <div>
                    <Link href={cta.href} passHref>
                      <ButtonLink>{cta.text}</ButtonLink>
                    </Link>
                  </div>
                )}
              </ContentBlock>
            ),
          )}
        </Container>
      </LayoutContainer>
    </>
  );
}
