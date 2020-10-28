import React from 'react';

import { styled } from './stitches.config';

const StyledRichText = styled('div', {
  maxWidth: '60ch',
  color: '$primaryDark1',
  fontFamily: '$lato',
  fontSize: '1em', // 16px
  fontWeight: '$book',
  lineHeight: 1.5625,

  'p, ul': { margin: '1.25em 0' },

  variants: {
    size: {
      xs: { fontSize: '$text-xs' },
      sm: { fontSize: '$text-sm' },
      md: { fontSize: '$text-md' },
      lg: { fontSize: '$text-lg' },
    },
  },
});

export interface RichTextProps {
  children: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function RichText({
  size = 'md',
  children,
}: RichTextProps): React.ReactElement {
  return (
    <StyledRichText
      dangerouslySetInnerHTML={{ __html: children }}
      size={size}
    />
  );
}
