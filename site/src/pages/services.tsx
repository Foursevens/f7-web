import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { SiteContentBlock } from '../content-block';
import {
  MainLayoutData,
  MainLayoutContainer,
  getMainLayoutData,
} from '../layout';
import { getServicesData, ServicesData } from '../services';

interface Props extends MainLayoutData, ServicesData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getMainLayoutData();
  const servicesData = await getServicesData();
  return { props: { ...layoutData, ...servicesData } };
};

export default function ServicesPage({
  headerMenu,
  service,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Services</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <Container spacing="xlarge">
          {service?.contentBlocks.map((contentBlock) => (
            <SiteContentBlock key={contentBlock.id} {...contentBlock} />
          ))}
        </Container>
      </MainLayoutContainer>
    </>
  );
}
