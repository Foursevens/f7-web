import { ContentBlock, Hero3, RichText, Tag, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

interface Props extends LayoutData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  return { props: layoutData };
};

export default function CaseDetailPage({
  mainMenu,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Hero3
          backLink={
            <Link href="/cases">
              <a>Return to cases</a>
            </Link>
          }
        >
          <ContentBlock>
            <Title size="lg">Eenvoudig fietsparkeren</Title>
            <Tag>Cyclo</Tag>
            <RichText>
              {
                '<p>We maakten organisationele groei mogelijk en overwichtelijk via digitalisering van bestaande IT processen.</p>'
              }
            </RichText>
          </ContentBlock>
        </Hero3>
      </LayoutContainer>
    </>
  );
}
