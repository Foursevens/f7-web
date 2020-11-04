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
      sm: { fontSize: '$title-sm', lineHeight: 1.3 },
      md: { fontSize: '$title-md', lineHeight: 1.27 },
      lg: { fontSize: '$title-lg', lineHeight: 1.25 },
      xl: { fontSize: '$title-xl', lineHeight: 1.11 },
    },
  },
});

export interface TitleProps {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: React.ReactNode;
  fullStop?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Title({
  as = 'div',
  children,
  fullStop = true,
  size = 'md',
}: TitleProps): React.ReactElement {
  return (
    <StyledTitle as={as} className="title" fullStop={fullStop} size={size}>
      {children}
    </StyledTitle>
  );
}
