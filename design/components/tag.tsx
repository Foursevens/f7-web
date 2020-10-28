import React from 'react';

import { styled } from './stitches.config';

const StyledWrapper = styled('strong', {
  color: '$secondary1',
  fontFamily: '$lato',
  fontSize: '0.875em', // 14px
  fontWeight: '$heavy',
  letterSpacing: 0.7,
  lineHeight: 1.285,
  textTransform: 'uppercase',
});

export interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps): React.ReactElement {
  return <StyledWrapper>{children}</StyledWrapper>;
}
