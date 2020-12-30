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

import { useLocale } from '../../cms';
import { SiteConversionBlock, SiteImage } from '../../components';
import { getCaseDetailPageData, SiteCaseDetailPageData } from '../../data';
import { LayoutData, LayoutContainer, getLayoutData } from '../../layout';

interface PageProps extends LayoutData, SiteCaseDetailPageData {}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const layoutData = await getLayoutData();
  const { slug } = context.params as { slug: string };
  const caseDetailPageData = await getCaseDetailPageData(slug);
  return { props: { ...layoutData, ...caseDetailPageData } };
};

export default function CaseDetailPage({
  caseDetail,
  caseDetailPage: { conversion },
  ...layoutData
}: PageProps): React.ReactElement {
  const locale = useLocale();

  if (caseDetail == null) {
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
          image={<SiteImage image={caseDetail.image} />}
        >
          <TextBlock>
            {caseDetail.title == null ? null : (
              <Title size="lg">{caseDetail.title[locale]}</Title>
            )}
            {caseDetail.tagline == null ? null : (
              <Tag>{caseDetail.tagline[locale]}</Tag>
            )}
            {caseDetail.introduction == null ? null : (
              <RichText>{caseDetail.introduction[locale]}</RichText>
            )}
            <CaseDetails>
              {caseDetail.client == null ? null : (
                <p>
                  <strong>Klant</strong> {caseDetail.client}
                </p>
              )}
              {caseDetail.clientWebsite == null ? null : (
                <p>
                  <a href={caseDetail.clientWebsite}>Bezoek de website</a>
                </p>
              )}
            </CaseDetails>
          </TextBlock>
        </Hero3>
        <ContainerStack margin padding>
          <ContentBlock image={<SiteImage image={caseDetail.problem.image} />}>
            <TextBlock>
              <Title>Problem</Title>
              <RichText>{caseDetail.problem.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock
            image={<SiteImage image={caseDetail.solution.image} />}
            imageAtEnd
          >
            <TextBlock>
              <Title>Solution</Title>
              <RichText>{caseDetail.solution.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
          <ContentBlock image={<SiteImage image={caseDetail.result.image} />}>
            <TextBlock>
              <Title>Result</Title>
              <RichText>{caseDetail.result.content[locale]}</RichText>
            </TextBlock>
          </ContentBlock>
        </ContainerStack>
        {conversion == null ? null : (
          <Container margin>
            <SiteConversionBlock conversion={conversion} />
          </Container>
        )}
      </LayoutContainer>
    </>
  );
}
