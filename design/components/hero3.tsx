import React from 'react';

import { styled } from './stitches.config';
import { ImageProps } from './types';

const StyledHero3 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr repeat(12, calc(1284px / 12)) 1fr',
  minHeight: 400,

  '.hero3__children': {
    gridColumn: '2 / 7',
    gridRow: '1 / 2',
    marginTop: 100,
  },

  '.hero3__image': {
    gridColumn: '8 / 14',
    gridRow: '1 / 2',

    img: {
      width: '100%',
    },
  },
});

export interface Hero3Props {
  children: React.ReactNode;
  image?: ImageProps;
}

export function Hero3({ children, image }: Hero3Props): React.ReactElement {
  return (
    <StyledHero3>
      <div className="hero3__children">{children}</div>
      <div aria-hidden="true" className="hero3__image">
        {image == null ? null : <img alt="decorative" src={image.url} />}
      </div>
    </StyledHero3>
  );
}
