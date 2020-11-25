import {
  CaseDetails,
  ContainerStack,
  ContentBlock,
  Hero3,
  RichText,
  Tag,
  TextBlock,
  Title,
} from '@f7-web/design';
import { GetServerSideProps } from 'next';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import {
  getCaseDetailPageData,
  SiteCaseDetailPageData,
} from '../../case-detail-page';
import { SiteImage } from '../../cms';
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
  if (caseItem == null) {
    return <DefaultErrorPage statusCode={404} />;
  }
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
          image={<SiteImage image={caseItem.image} />}
        >
          <TextBlock>
            {caseItem.title == null ? null : (
              <Title size="lg">{caseItem.title}</Title>
            )}
            {caseItem.tagline == null ? null : <Tag>{caseItem.tagline}</Tag>}
            {caseItem.introduction == null ? null : (
              <RichText>{caseItem.introduction}</RichText>
            )}
            <CaseDetails>
              {caseItem.client == null ? null : (
                <p>
                  <strong>Klant</strong> {caseItem.client}
                </p>
              )}
              {caseItem.clientWebsite == null ? null : (
                <p>
                  <a href={caseItem.clientWebsite}>Bezoek de website</a>
                </p>
              )}
            </CaseDetails>
          </TextBlock>
        </Hero3>
        <ContainerStack margin padding>
          <ContentBlock image={<SiteImage image={caseItem.problem.image} />}>
            <TextBlock>
              <Title>Problem</Title>
              <RichText>{caseItem.problem.content}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock
            image={<SiteImage image={caseItem.solution.image} />}
            imageAtEnd
          >
            <TextBlock>
              <Title>Solution</Title>
              <RichText>{caseItem.solution.content}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock image={<SiteImage image={caseItem.result.image} />}>
            <TextBlock>
              <Title>Result</Title>
              <RichText>{caseItem.result.content}</RichText>
            </TextBlock>
          </ContentBlock>
        </ContainerStack>
      </LayoutContainer>
    </>
  );
}
