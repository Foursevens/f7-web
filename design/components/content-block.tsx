import React from 'react';

import { styled } from './stitches.config';

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

  'h1, h2, h3, h4, h5, h6': {
    marginBottom: 20,
  },

  strong: { order: -1, marginBottom: 15 },

  p: {
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
  children: React.ReactNode;
  image?: { position?: 'start' | 'end'; url: string };
}

export function ContentBlock({
  children,
  image,
}: ContentBlockProps): React.ReactElement {
  const sides = [];
  if (React.Children.count(children) !== 0) {
    sides.push(
      <StyledContentSide key="content-side">{children}</StyledContentSide>,
    );
  }
  if (image != null) {
    sides.push(
      <StyledImageSide key="image-side" aria-hidden="true">
        <img alt="decorative" src={image.url} />
      </StyledImageSide>,
    );
    if ((image.position ?? 'start') === 'start') {
      sides.reverse();
    }
  }
  return <StyledContentBlock>{sides}</StyledContentBlock>;
}
