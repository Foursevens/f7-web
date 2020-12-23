import {
  CaseDetails,
  Container,
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
import { SiteConversionBlock, SiteImage, useLocale } from '../../cms';
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
  caseDetailPage: { conversion },
  case: caseItem,
  ...layoutData
}: Props): React.ReactElement {
  const locale = useLocale();

  if (caseItem == null) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Foursevens Test Case</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer {...layoutData}>
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
              <Title size="lg">{caseItem.title[locale]}</Title>
            )}
            {caseItem.tagline == null ? null : (
              <Tag>{caseItem.tagline[locale]}</Tag>
            )}
            {caseItem.introduction == null ? null : (
              <RichText>{caseItem.introduction[locale]}</RichText>
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
              <RichText>{caseItem.problem.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock
            image={<SiteImage image={caseItem.solution.image} />}
            imageAtEnd
          >
            <TextBlock>
              <Title>Solution</Title>
              <RichText>{caseItem.solution.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock image={<SiteImage image={caseItem.result.image} />}>
            <TextBlock>
              <Title>Result</Title>
              <RichText>{caseItem.result.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
        </ContainerStack>
        <Container margin>
          <SiteConversionBlock conversion={conversion} />
        </Container>
      </LayoutContainer>
    </>
  );
}
