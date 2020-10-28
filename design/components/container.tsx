import React from 'react';

import { styled } from './stitches.config';

const StyledContainer = styled('div', {
  '.container__inner': {
    maxWidth: 1284,
    margin: '0 auto',
  },

  variants: {
    background: {
      primary2: { backgroundColor: '$primary2' },
      white1: { backgroundColor: '$white1' },
      white2: { backgroundColor: '$white2' },
    },
    margin: {
      true: { margin: '$xl 0' },
    },
    padding: {
      true: { padding: '$xl' },
    },
  },
});

export interface ContainerProps {
  background?: 'primary2' | 'white1' | 'white2';
  children: React.ReactNode;
  margin?: boolean;
  padding?: boolean;
}

export function Container({
  background,
  children,
  margin,
  padding,
}: ContainerProps): React.ReactElement {
  return (
    <StyledContainer {...{ background, margin, padding }}>
      <div className="container__inner">{children}</div>
    </StyledContainer>
  );
}
