import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { styled } from './stitches.config';

const ContentArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'center',
  height: 145,

  '>svg': {
    width: 200,
    position: 'absolute',
    top: -50,
    right: 0,
    transform: 'translateX(20%)',
  },
});
const ContentAreraWrapper = styled('div', {
  position: 'relative',
  backgroundColor: '$primary2',
  overflow: 'hidden',
  paddingLeft: 50,
  paddingRight: 50,
});

export interface ConversionBlockProps {
  children: React.ReactNode;
}

export function ConversationBlock({
  children,
}: ConversionBlockProps): React.ReactElement {
  return (
    <ContentAreraWrapper>
      <ContentArea>
        <FoursevensIcon />
        {children}
      </ContentArea>
    </ContentAreraWrapper>
  );
}
