import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { SiteConversionBlock } from '../../cms';
import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';
import {
  SiteTeamMemberPageData,
  getTeamMemberPageData,
} from '../../team-member-page';

interface Props extends LayoutData, SiteTeamMemberPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const layoutData = await getLayoutData();
  const { slug } = context.params as { slug: string };
  const teamMemberPageData = await getTeamMemberPageData(slug);
  return { props: { ...layoutData, ...teamMemberPageData } };
};

export default function TeamMemberPage({
  layout: { mainMenu },
  teamMemberPage: { conversion },
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
