import { StitchesProps } from '@stitches/react';
import React from 'react';

import { styled } from './stitches.config';

const StyledAspectRatioBox = styled('div', {
  '--aspect-ratio': '1',

  position: 'relative',
  overflow: 'hidden',

  '&:before': {
    display: 'block',
    content: '""',
    width: '100%',
    paddingTop: 'calc(100% / var(--aspect-ratio))',
  },

  '.ratio-box__inner': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
});

export interface AspectRatioBoxProps
  extends StitchesProps<typeof StyledAspectRatioBox> {
  aspectRatio?: number;
}

export function AspectRatioBox({
  aspectRatio = 1,
  children,
  ...props
}: AspectRatioBoxProps): React.ReactElement {
  return (
    <StyledAspectRatioBox {...props} style={{ '--aspect-ratio': aspectRatio }}>
      <div className="ratio-box__inner">{children}</div>
    </StyledAspectRatioBox>
  );
}
