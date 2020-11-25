import {
  ButtonLink,
  ContainerStack,
  ContentBlock,
  RichText,
  Tag,
  TextBlock,
  Title,
} from '@f7-web/design';
import Link from 'next/link';
import React from 'react';

import { SiteImage } from '../image';
import { SiteContentBlockModel } from './types';

const EVEN = 2;

interface Props {
  blocks?: SiteContentBlockModel[];
}

export function SiteContentBlockStack({ blocks }: Props): React.ReactElement {
  return (
    <ContainerStack margin padding>
      {blocks?.map(({ id, image, title, tagline, content, cta }, index) => (
        <ContentBlock
          key={id}
          image={<SiteImage image={image} />}
          imageAtEnd={index % EVEN === 1}
        >
          <TextBlock>
            {title == null ? null : (
              <Title as="h3" size="md">
                {title}
              </Title>
            )}
            {tagline == null ? null : <Tag>{tagline}</Tag>}
            {content == null ? null : <RichText>{content}</RichText>}
            {cta == null ? null : (
              <div>
                <Link href={cta.href} passHref>
                  <ButtonLink>{cta.text}</ButtonLink>
                </Link>
              </div>
            )}
          </TextBlock>
        </ContentBlock>
      ))}
    </ContainerStack>
  );
}
