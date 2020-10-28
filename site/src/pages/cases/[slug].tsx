import {
  Container,
  ContentBlock,
  Hero3,
  RichText,
  Tag,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
  getCaseDetailPageData,
  SiteCaseDetailPageData,
} from '../../case-detail-page';
import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

interface Props extends LayoutData, SiteCaseDetailPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const layoutData = await getLayoutData();
  const { slug } = context.params as { slug: string };
  const caseDetailPageData = await getCaseDetailPageData(slug);
  return { props: { ...layoutData, ...caseDetailPageData } };
};

export default function CaseDetailPage({
  mainMenu,
  case: caseItem,
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
          image={caseItem.image}
        >
          <ContentBlock>
            {caseItem.title == null ? null : (
              <Title size="lg">{caseItem.title}</Title>
            )}
            {caseItem.tagline == null ? null : <Tag>{caseItem.tagline}</Tag>}
            {caseItem.introduction == null ? null : (
              <RichText>{caseItem.introduction}</RichText>
            )}
          </ContentBlock>
        </Hero3>
        <Container spacing="xlarge">
          <ContentBlock image={caseItem.problem.image}>
            <Title>Problem</Title>
            <RichText>{caseItem.problem.content}</RichText>
          </ContentBlock>
          <ContentBlock image={{ ...caseItem.solution.image, position: 'end' }}>
            <Title>Solution</Title>
            <RichText>{caseItem.solution.content}</RichText>
          </ContentBlock>
          <ContentBlock image={caseItem.result.image}>
            <Title>Result</Title>
            <RichText>{caseItem.result.content}</RichText>
          </ContentBlock>
        </Container>
      </LayoutContainer>
    </>
  );
}
