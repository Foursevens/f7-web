import { Container, ContentBlock } from '@f7-web/design';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

import {
  MainLayoutData,
  MainLayoutContainer,
  getMainLayoutData,
} from '../layout';
import { getServicesData, ServicesData } from '../services';

interface Props extends MainLayoutData, ServicesData {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const layoutData = await getMainLayoutData();
  const servicesData = await getServicesData();
  return { props: { ...layoutData, ...servicesData } };
};

export default function ServicesPage({
  headerMenu,
  services,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Services</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <Container>
          {services.map((service) => (
            <ContentBlock key={service.id} {...service} />
          ))}
        </Container>
      </MainLayoutContainer>
    </>
  );
}
