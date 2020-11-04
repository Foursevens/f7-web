import React from 'react';

import { Container } from './container';
import { styled } from './stitches.config';
import { ReactHtmlImageElement } from './types';

const StyledHero2 = styled(Container.Outer, {
  gridTemplateRows: 'auto auto',

  '.hero2__background-area': {
    gridArea: '1 / 1 / 2 / 15',
    backgroundColor: '$primary2',
  },

  '.hero2__children': {
    gridArea: '1 / 2 / 2 / 14',
    alignSelf: 'center',
    padding: '$lg 0',
  },

  '.hero2__image-area': {
    gridArea: '2 / 1 / 3 / 15',

    img: { width: '100%', height: '100%', objectFit: 'cover' },
  },

  lg: {
    gridTemplateRows: 'auto',
    minHeight: 350,

    '.hero2__background-area': {
      gridArea: '1 / 1 / 2 / 7',
      height: '100%',
      transform: 'translateY(-100px)',
      zIndex: -1,
    },
    '.hero2__children': {
      gridArea: '1 / 2 / 2 / 4',
      padding: 0,
      transform: 'translateY(-100px)',
    },
    '.hero2__image-area': {
      gridArea: '1 / 5 / 2 / 15',
    },
  },

  xl: {
    '.hero2__background-area': { gridArea: '1 / 1 / 2 / 7' },
    '.hero2__children': { gridArea: '1 / 2 / 2 / 5' },
    '.hero2__image-area': { gridArea: '1 / 5 / 2 / 15' },
  },
});

export interface Hero2Props {
  children: React.ReactNode;
  image?: ReactHtmlImageElement;
}

export function Hero2({ children, image }: Hero2Props): React.ReactElement {
  return (
    <StyledHero2>
      <div className="hero2__background-area" />
      <div className="hero2__children">{children}</div>
      {image == null ? null : (
        <div aria-hidden="true" className="hero2__image-area">
          {image}
        </div>
      )}
    </StyledHero2>
  );
}
