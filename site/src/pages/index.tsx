import { ButtonLink, Hero1, RichText, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../layout';

interface Props extends LayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  return { props: layoutData };
};

export default function Homepage({ mainMenu }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
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
      </LayoutContainer>
    </>
  );
}
