import {
  ButtonLink,
  Container,
  ConversionBlock,
  Hero2,
  RichText,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { SiteContentBlockStack, SiteImage } from '../cms';
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
  servicesPage: { hero, blocks, conversion },
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Services</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero2 image={<SiteImage image={hero.image} />}>
          {hero.title == null ? null : (
            <Title as="h2" size="md">
              {hero.title}
            </Title>
          )}
        </Hero2>
        {hero.content == null ? null : (
          <Container margin>
            <RichText>{hero.content}</RichText>
          </Container>
        )}
        <SiteContentBlockStack blocks={blocks} />
        <Container margin>
          <ConversionBlock>
            {conversion.title == null ? null : (
              <Title fullStop={false} size="md">
                {conversion.title}
              </Title>
            )}
            {conversion.content == null ? null : (
              <RichText size="lg">{conversion.content}</RichText>
            )}
            {conversion.cta == null ? null : (
              <Link href={conversion.cta.href} passHref>
                <ButtonLink background="secondary">
                  {conversion.cta.text}
                </ButtonLink>
              </Link>
            )}
          </ConversionBlock>
        </Container>
      </LayoutContainer>
    </>
  );
}
