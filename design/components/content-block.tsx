import React from 'react';

import { ButtonLink } from './button-link';
import { Paragraph } from './paragraph';
import { styled } from './stitches.config';
import { Tag } from './tag';

const StyledBlock = styled('section', {
  display: 'flex',
  justifyItems: 'space-around',

  '> *': {
    width: '50%',
  },

  variants: {
    imagePosition: {
      start: {
        '> *:nth-child(1)': { order: 1 },
        '> *:nth-child(2)': { order: 2, paddingLeft: 96 },
      },
      end: {
        '> *:nth-child(1)': { order: 2 },
        '> *:nth-child(2)': { order: 1, paddingRight: 96 },
      },
    },
  },
});

const StyledContent = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  header: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: '$large',

    // order tag to top
    '> *:nth-child(2)': { order: -1 },

    '* + *': {
      marginTop: '$small',
    },
  },
  'main p': {
    marginBottom: '$medium',
  },
});

export interface ContentBlockProps {
  content: string;
  cta?: { href: string; target?: string; text: string };
  tag?: string;
  title: string;
  image: string;
  imagePosition?: 'start' | 'end';
}

export function ContentBlock({
  content,
  cta,
  image,
  imagePosition = 'start',
  tag,
  title,
}: ContentBlockProps): React.ReactElement {
  return (
    <StyledBlock imagePosition={imagePosition}>
      <div>
        <img alt="decorative" aria-hidden="true" src={image} />
      </div>
      <StyledContent>
        <header>
          <h1>{title}</h1>
          <Tag>{tag}</Tag>
        </header>
        <main>
          <Paragraph>{content}</Paragraph>
          {cta == null ? null : (
            <ButtonLink href={cta.href} target={cta.target}>
              {cta.text}
            </ButtonLink>
          )}
        </main>
      </StyledContent>
    </StyledBlock>
  );
}
