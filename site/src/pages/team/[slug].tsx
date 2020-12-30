import { Container } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { SiteConversionBlock } from '../../components';
import { SiteTeamMemberPageData, getTeamMemberPageData } from '../../data';
import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

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
  teamMemberPage: { conversion },
  ...layoutData
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
        {conversion == null ? null : (
          <Container margin>
            <SiteConversionBlock conversion={conversion} />
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
