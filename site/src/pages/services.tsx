import {
  ButtonLink,
  Container,
  ContainerStack,
  ContentBlock,
  Hero2,
  RichText,
  Tag,
  TextBlock,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { SiteImage } from '../cms';
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
        <Hero2 image={<SiteImage image={servicesPage.hero.image} />}>
          {servicesPage.hero.title == null ? null : (
            <Title as="h2" size="md">
              {servicesPage.hero.title}
            </Title>
          )}
        </Hero2>
        {servicesPage.hero.content == null ? null : (
          <Container margin>
            <RichText>{servicesPage.hero.content}</RichText>
          </Container>
        )}
        <ContainerStack margin padding>
          {servicesPage.blocks?.map(
            ({ id, image, title, tagline, content, cta }) => (
              <ContentBlock key={id}>
                <SiteImage image={image} />
                <TextBlock>
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
                </TextBlock>
              </ContentBlock>
            ),
          )}
        </ContainerStack>
      </LayoutContainer>
    </>
  );
}
