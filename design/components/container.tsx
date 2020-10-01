import React from 'react';

import { styled } from './stitches.config';

const Wrapper = styled('div', {
  variants: {
    background: {
      primary2: { backgroundColor: '$primary2' },
      white1: { backgroundColor: '$white1' },
      white2: { backgroundColor: '$white2' },
    },
    spacing: {
      small: { padding: '$small' },
      medium: { padding: '$medium' },
      large: { padding: '$large' },
      xlarge: { padding: '$xlarge' },
    },
  },
});

export const StyledContainer = styled('div', {
  maxWidth: 1284,
  margin: '0 auto',
});

export interface ContainerProps {
  background: 'primary2' | 'white1' | 'white2';
  spacing: 'small' | 'medium' | 'large' | 'xlarge';
  children: React.ReactNode;
}

export function Container({
  background,
  children,
  spacing,
}: ContainerProps): React.ReactElement {
  return (
    <Wrapper {...{ background, spacing }}>
      <StyledContainer>{children}</StyledContainer>
    </Wrapper>
  );
}
