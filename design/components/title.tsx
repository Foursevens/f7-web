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
    size: {
      size1: { fontSize: '$title1', lineHeight: 1.3 },
      size2: { fontSize: '$title2', lineHeight: 1.27 },
      size3: { fontSize: '$title3', lineHeight: 1.11 },
    },
  },
});

export interface TitleProps {
  as?: string;
  children: string;
  fullStop?: boolean;
  size?: 'size1' | 'size2' | 'size3';
}

export function Title({
  as,
  children,
  fullStop = true,
  size = 'size1',
}: TitleProps): React.ReactElement {
  return (
    <StyledTitle as={as} fullStop={fullStop} size={size}>
      {children.trimEnd().replace(/\.+$/, '')}
      {fullStop ? <span style={{ color: '#f7b32b' }}>.</span> : null}
    </StyledTitle>
  );
}
