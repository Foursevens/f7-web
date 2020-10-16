import { ButtonLink, Container, ContentBlock, RichText, Tag, Title } from '@f7-web/design';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { LayoutData, LayoutContainer, getLayoutData } from '../layout';
import { getServicesPageData, SiteServicesPageData } from '../services-page';

interface Props extends LayoutData, SiteServicesPageData {}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const layoutData = await getLayoutData();
  const servicesPageData = await getServicesPageData();
  return { props: { ...layoutData, ...servicesPageData } };
};

export default function ServicesPage({
  mainMenu,
  servicesPage,
}: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Foursevens Services</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutContainer mainMenu={mainMenu}>
        <Container spacing="xlarge">
          {servicesPage.blocks?.map(({image, title, tagline, content, cta}) => (
             <ContentBlock image={image}>
             {title == null ? null : <Title as="h3" size={2}>{title}</Title>}
             {tagline == null ? null : <Tag>{tagline}</Tag>}
             {content == null ? null : <RichText>{content}</RichText>}
             {cta == null ? null : (
               <div>
                 <Link href={cta.href} passHref>
                   <ButtonLink>{cta.text}</ButtonLink>
                 </Link>
               </div>
             )}
           </ContentBlock>
          ))}
        </Container>
      </LayoutContainer>
    </>
  );
}
