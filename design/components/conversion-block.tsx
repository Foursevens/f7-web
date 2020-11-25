import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { styled } from './stitches.config';

const StyledConversionBlock = styled('div', {
  backgroundColor: '$primary2',
  overflow: 'hidden',
  position: 'relative',
  height: 170,

  '> svg': {
    position: 'absolute',
    top: '$md',
    right: 0,
    transform: 'translateX(25%)',
    transformOrigin: 'top left',
  },
});

const ContentArea = styled('div', {
  position: 'absolute',
  left: 50,
  right: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
});

export interface ConversionBlockProps {
  children: React.ReactNode;
}

export function ConversionBlock({
  children,
}: ConversionBlockProps): React.ReactElement {
  return (
    <StyledConversionBlock>
      <FoursevensIcon />
      <ContentArea>{children}</ContentArea>
    </StyledConversionBlock>
  );
}
