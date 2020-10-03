import React from 'react';

import { ButtonLink } from './button-link';
import { RichText } from './rich-text';
import { styled } from './stitches.config';
import { Tag } from './tag';

const StyledImageSide = styled('div', {
  img: { maxHeight: 400 },
  ':last-child': { textAlign: 'right' },
});

const StyledContentSide = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  '&:first-child': { paddingRight: 96 },
  '&:last-child': { paddingLeft: 96 },

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

  'main p': { marginBottom: '$medium' },
});

const StyledContentBlock = styled('section', {
  display: 'flex',
  justifyItems: 'space-around',

  '> *': { width: '50%' },
});

export interface ContentBlockProps {
  content: string;
  cta?: { href: string; target?: string; text: string };
  image: { position?: 'start' | 'end'; url: string };
  tag?: string;
  title: string;
}

export function ContentBlock({
  content,
  cta,
  image,
  tag,
  title,
}: ContentBlockProps): React.ReactElement {
  const sides = [
    <StyledImageSide aria-hidden="true">
      <img alt="decorative" src={image.url} />
    </StyledImageSide>,
    <StyledContentSide>
      <header>
        <h1>{title}</h1>
        {tag == null ? null : <Tag>{tag}</Tag>}
      </header>
      <main>
        <RichText>{content}</RichText>
        {cta == null ? null : (
          <ButtonLink href={cta.href} target={cta.target}>
            {cta.text}
          </ButtonLink>
        )}
      </main>
    </StyledContentSide>,
  ];
  return (
    <StyledContentBlock>
      {image.position == null || image.position === 'start'
        ? sides
        : sides.reverse()}
    </StyledContentBlock>
  );
}
