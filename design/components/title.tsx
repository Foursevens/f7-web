import React from 'react';

import { styled } from './stitches.config';

const StyledTitle = styled('div', {
  fontFamily: '$avenir',
  fontWeight: '$dark',
  fontStretch: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
  color: '$primary1',

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
  as?: string;
  children: string;
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <StyledTitle as={as as any} fullStop={fullStop} size={size}>
      {children.trimEnd().replace(/\.+$/, '')}
    </StyledTitle>
  );
}
