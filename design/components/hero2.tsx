import React from 'react';

import { styled } from './stitches.config';
import { ImageProps } from './types';

const StyledHero2 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr repeat(12, calc(1284px / 12)) 1fr',
  minHeight: 400,

  '.hero2__background-area': {
    gridColumn: '1 / 7',
    gridRow: '1 / 2',
    height: '100%',
    transform: 'translateY(-100px)',
    zIndex: -1,
    backgroundColor: '$primary2',
  },

  '.hero2__children': {
    alignSelf: 'center',
    gridColumn: '2 / 5',
    gridRow: '1 / 2',
    transform: 'translateY(-100px)',
  },

  '.hero2__image-area': {
    gridColumn: '5 / 15',
    gridRow: '1 / 2',

    img: {
      width: '100%',
      height: '100%',
      contentFit: 'cover',
    },
  },
});

export interface Hero2Props {
  children: React.ReactNode;
  image?: ImageProps;
}

export function Hero2({ children, image }: Hero2Props): React.ReactElement {
  return (
    <StyledHero2>
      <div className="hero2__background-area" />
      <div className="hero2__children">{children}</div>
      {image == null ? null : (
        <div aria-hidden="true" className="hero2__image-area">
          <img alt="decorative" src={image.url} />
        </div>
      )}
    </StyledHero2>
  );
}
