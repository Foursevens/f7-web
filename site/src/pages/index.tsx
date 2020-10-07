import { ButtonLink, Hero1, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import {
  MainLayoutData,
  MainLayoutContainer,
  getMainLayoutData,
} from '../layout';

interface Props extends MainLayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getMainLayoutData();
  return { props: layoutData };
};

export default function Home({ headerMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <MainLayoutContainer headerMenu={headerMenu}>
        <Hero1 image={{ url: '/hero1.png' }}>
          <Title as="h1" size={1}>
            Digitaal voor mens en planeet
          </Title>
          <RichText>
            {
              '<p>Sustainable digital solutions with positive impact on people and planet.</p>'
            }
          </RichText>
          <div>
            <ButtonLink background="secondary">Ontdek onze cases</ButtonLink>
          </div>
        </Hero1>
      </MainLayoutContainer>
    </>
  );
}
