import React from 'react';

import { ButtonLink } from './button-link';
import { RichText } from './rich-text';
import { styled } from './stitches.config';
import { Tag } from './tag';
import { Title } from './title';

const StyledImageSide = styled('div', {
  img: { maxHeight: 400 },
  ':last-child': { textAlign: 'right' },
});

const StyledContentSide = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  '&:first-child': { paddingRight: 96 },
  '&:not(:first-child)': { paddingLeft: 96 },

  header: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: '$large',

    // select tag
    '> *:nth-child(2)': {
      marginBottom: '$small',
      order: -1,
    },
  },

  'main p': {
    maxWidth: '70ch',
    marginBottom: '$medium',
  },
});

const StyledContentBlock = styled('section', {
  display: 'flex',
  justifyItems: 'space-around',

  '> *': { flex: '1 0' },
});

export interface ContentBlockProps {
  content?: string;
  cta?: { href: string; target?: string; text: string };
  image?: { position?: 'start' | 'end'; url: string };
  tag?: string;
  title?: string;
}

export function ContentBlock({
  content,
  cta,
  image,
  tag,
  title,
}: ContentBlockProps): React.ReactElement {
  const sides = [];
  if (tag != null || title != null || content != null || cta != null) {
    sides.push(
      <StyledContentSide>
        <header>
          {title == null ? null : (
            <Title as="h3" size={2}>
              {title}
            </Title>
          )}
          {tag == null ? null : <Tag>{tag}</Tag>}
        </header>
        <main>
          {content == null ? null : <RichText>{content}</RichText>}
          {cta == null ? null : (
            <ButtonLink href={cta.href} target={cta.target}>
              {cta.text}
            </ButtonLink>
          )}
        </main>
      </StyledContentSide>,
    );
  }
  if (image != null) {
    sides.push(
      <StyledImageSide aria-hidden="true">
        <img alt="decorative" src={image.url} />
      </StyledImageSide>,
    );
    if ((image.position ?? 'start') === 'start') {
      sides.reverse();
    }
  }
  return <StyledContentBlock>{sides}</StyledContentBlock>;
}
