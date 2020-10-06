import React from 'react';

import { styled } from './stitches.config';

const StyledRichText = styled('div', {
  color: '$primaryDark1',
  fontFamily: '$avenir',
  fontSize: '1em', // 16px
  lineHeight: 1.5625,

  'p, ul': { margin: '1.25em 0' },
});

export interface RichTextProps {
  children: string;
}

export function RichText({ children }: RichTextProps): React.ReactElement {
  return <StyledRichText dangerouslySetInnerHTML={{ __html: children }} />;
}
