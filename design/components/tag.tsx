import React from 'react';

import { styled } from './stitches.config';

const StyledWrapper = styled('div', {
  color: '$secondary1',
  fontFamily: '$avenir',
  fontSize: '0.875em', // 14px
  fontWeight: '$dark',
  letterSpacing: 0.7,
  lineHeight: 1.125,
  textTransform: 'uppercase',
});

export interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps): React.ReactElement {
  return <StyledWrapper>{children}</StyledWrapper>;
}

Tag.toString = () => `.f7-tag`;
