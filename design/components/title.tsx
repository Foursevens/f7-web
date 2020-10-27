import React from 'react';

import { styled } from './stitches.config';

const StyledTitle = styled('div', {
  color: '$primary1',
  fontFamily: '$lato',
  fontWeight: '$black',

  variants: {
    fullStop: {
      true: {
        '::after': {
          content: '"."',
          display: 'inline-block',
          color: '$secondary1',
        },
      },
    },
    size: {
      1: { fontSize: '$title1', lineHeight: 1.11 },
      2: { fontSize: '$title2', lineHeight: 1.27 },
      3: { fontSize: '$title3', lineHeight: 1.3 },
    },
  },
});

export interface TitleProps {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: React.ReactNode;
  fullStop?: boolean;
  size?: 1 | 2 | 3; // eslint-disable-line no-magic-numbers
}

export function Title({
  as = 'div',
  children,
  fullStop = true,
  size,
}: TitleProps): React.ReactElement {
  return (
    <StyledTitle as={as} fullStop={fullStop} size={size}>
      {children}
    </StyledTitle>
  );
}
