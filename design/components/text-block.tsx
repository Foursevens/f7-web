import React from 'react';

import { styled } from './stitches.config';

const StyledTextBlock = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  'h1, h2, h3, h4, h5, h6': {
    marginBottom: 20,
  },

  strong: { order: -1, marginBottom: 15 },

  p: {
    marginBottom: '$sm',
  },
});

export interface TextBlockProps {
  children: React.ReactNode;
}

export function TextBlock({ children }: TextBlockProps): React.ReactElement {
  return <StyledTextBlock>{children}</StyledTextBlock>;
}
