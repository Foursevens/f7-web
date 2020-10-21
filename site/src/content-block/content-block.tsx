import { ButtonLink, ContentBlock, RichText, Tag, Title } from '@f7-web/design';
import React from 'react';

import { ContentBlock as ContentBlockProps } from './types';

export function SiteContentBlock({
  image,
  content,
  cta,
  tag,
  title,
}: ContentBlockProps): React.ReactElement {
  return (
    <ContentBlock image={image}>
      {title == null ? null : <Title>{title}</Title>}
      {tag == null ? null : <Tag>{tag}</Tag>}
      {content == null ? null : <RichText>{content}</RichText>}
      {cta == null ? null : (
        <div>
          <ButtonLink href={cta.href}>{cta.text}</ButtonLink>
        </div>
      )}
    </ContentBlock>
  );
}
