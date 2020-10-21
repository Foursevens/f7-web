import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { styled } from './stitches.config';

const ContentArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'center',
  height: 140,
});

const ContentAreraWrapper = styled('div', {
  backgroundColor: '$primary2',
  overflow: 'hidden',
  position: 'relative',
  padding: '0 50px 0 50px',

  '> svg': {
    position: 'absolute',
    top: 20,
    right: 0,
    transform: 'translateX(20%)',
  },
});

export interface ConversionBlockProps {
  children: React.ReactNode;
}

export function ConversationBlock({
  children,
}: ConversionBlockProps): React.ReactElement {
  return (
    <ContentAreraWrapper>
      <FoursevensIcon />
      <ContentArea>{children}</ContentArea>
    </ContentAreraWrapper>
  );
}
