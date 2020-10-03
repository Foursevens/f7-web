import React from 'react';

import { styled } from './stitches.config';

const StyledParagraph = styled('p', {
  color: '$primaryDark1',
  fontFamily: '$avenir',
  fontSize: '1em', // 16px
  lineHeight: 1.5625,
});

export interface ParagraphProps {
  children: React.ReactNode;
}

export function Paragraph({ children }: ParagraphProps): React.ReactElement {
  return <StyledParagraph>{children}</StyledParagraph>;
}
