import React from 'react';

import { styled } from './stitches.config';

const StyledGrid = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
});

export interface GridProps {
  children: React.ReactNode;
}

export function Grid({ children }: GridProps): React.ReactElement {
  return <StyledGrid>{children}</StyledGrid>;
}
