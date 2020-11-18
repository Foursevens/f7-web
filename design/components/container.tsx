import React from 'react';

import { styled } from './stitches.config';

const StyledOuterContainer = styled('div', {
  '--inline-gutter': '30px',

  display: 'grid',
  gridTemplateColumns:
    'var(--inline-gutter) repeat(12, 1fr) var(--inline-gutter)',
  gridTemplateRows: 'auto',

  md: { '--inline-gutter': '40px' },
  xl: { '--inline-gutter': 'max(40px, (100vw - 1280px) / 2)' },

  variants: {
    background: {
      primary2: { backgroundColor: '$primary2' },
      white1: { backgroundColor: '$white1' },
      white2: { backgroundColor: '$white2' },
    },
    margin: { true: { margin: '$xl 0' } },
    padding: { true: { padding: '$xl 0' } },
  },
});

const StyledInnerContainer = styled('div', {
  gridArea: '1 / 2 / 2 / 14',
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
    <StyledOuterContainer {...{ background, margin, padding }}>
      <StyledInnerContainer>{children}</StyledInnerContainer>
    </StyledOuterContainer>
  );
}

Container.Inner = StyledInnerContainer;

Container.Outer = StyledOuterContainer;
