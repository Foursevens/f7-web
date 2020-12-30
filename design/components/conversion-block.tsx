import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { styled } from './stitches.config';

const StyledConversionBlock = styled('div', {
  backgroundColor: '$primary2',
  overflow: 'hidden',
  position: 'relative',
  padding: '$lg',
  xl: { padding: '$lg $xl' },

  '> svg': {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateX(25%) scale(0.75)',
    transformOrigin: 'top right',

    md: { transform: 'translateX(25%)' },
    lg: {
      top: '20%',
      transform: 'translateX(20%) scale(0.75)',
    },
  },
});

const ContentArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  lg: { flexDirection: 'row' },

  '> *': {
    margin: '$xs 0',
    textAlign: 'center',
    lg: { margin: '0' },
  },

  p: { color: '$primary1' },
  a: { textDecoration: 'none' },
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
