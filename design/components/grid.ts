import { StitchesProps } from '@stitches/react';

import { styled } from './stitches.config';

const StyledGrid = styled('div', {
  display: 'grid',
  gap: '$md',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
});

export const Grid = StyledGrid;

export type GridProps = StitchesProps<typeof StyledGrid>;
