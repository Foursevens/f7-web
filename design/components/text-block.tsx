import { StitchesProps } from '@stitches/react';
import React from 'react';

import { styled } from './stitches.config';

const StyledTextBlock = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  '.tag': { order: -1, marginBottom: '$sm' },
  '.title': { marginBottom: '$xs' },
  p: { marginBottom: '$sm' },

  md: {
    '.title': { marginBottom: '$md' },
  },

  variants: {
    terse: {
      true: {
        '.tag': { marginBottom: 3 },
        '.title': { margin: 0 },
        p: { margin: 0 },
      },
    },
  },
});

export function TextBlock(
  props: StitchesProps<typeof StyledTextBlock>,
): React.ReactElement {
  return <StyledTextBlock {...props} />;
}

export type TextBlockProps = StitchesProps<typeof StyledTextBlock>;
