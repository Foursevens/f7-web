import { styled } from './stitches.config';

const StyledTextBlock = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',

  '.tag': { order: -1, marginBottom: '$sm' },
  '.title': { marginBottom: '$md' },
  p: { marginBottom: '$sm' },

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

export const TextBlock = StyledTextBlock;
