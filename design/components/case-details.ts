import { styled } from './stitches.config';

export const CaseDetails = styled('div', {
  fontFamily: '$lato',
  fontSize: '1em', // 16px
  fontWeight: '$book',

  p: {},

  strong: {
    color: '$primary1',
    fontWeight: '$black',
    textTransform: 'uppercase',
    marginRight: '$md',
  },

  a: {
    color: '$primary1',
  },
});
