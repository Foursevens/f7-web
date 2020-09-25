import React from 'react';

import { styled } from './stitches.config';

export interface ContainerProps {
  children: React.ReactNode;
}

const StyledWrapper = styled('div', {
  maxWidth: 1284,
});

export function Container({ children }: ContainerProps): React.ReactElement {
  return <StyledWrapper>{children}</StyledWrapper>;
}
