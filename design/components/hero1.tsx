import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { Container } from './container';
import { styled } from './stitches.config';
import { TextBlock } from './text-block';
import { ReactHtmlImageElement } from './types';

const StyledHero1 = styled(Container.Outer, {
  gridTemplateRows: 'auto min(100vw, 50vh)',

  '.hero1__background-area': {
    gridArea: '1 / 1 / 2 / 15',
    backgroundColor: '$primary2',

    overflow: 'hidden',
    position: 'relative',
    zIndex: -1,
    svg: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translate(12.5%, -50%) scale(0.75)',
      transformOrigin: 'center right',
    },
  },

  '.hero1__children': {
    gridArea: '1 / 2 / 2 / 14',
    alignSelf: 'center',
    maxWidth: '60ch',
    margin: '$lg 0',
    paddingBottom: '$lg',
  },

  '.hero1__image-area': {
    gridArea: '2 / 1 / 3 / 15',

    img: { width: '100%', height: '100%', objectFit: 'cover' },
  },

  md: {
    '.hero1__background-area': {
      svg: { transform: 'translate(25%, -50%)' },
    },
  },

  lg: {
    gridTemplateRows: 'auto 100px',
    '.hero1__background-area': {
      gridArea: '1 / 1 / 2 / 8',
      svg: {
        top: 'initial',
        right: 'initial',
        bottom: 0,
        left: 0,
        transform: 'translateX(-25%)',
        transformOrigin: 'bottom left',
      },
    },
    '.hero1__children': { gridArea: '1 / 2 / 2 / 7' },
    '.hero1__image-area': { gridArea: '1 / 8 / 3 / 15' },
  },

  xl: {
    '.hero1__background-area': { svg: { width: 'initial', height: 'initial' } },
  },
});

export interface Hero1Props {
  children: React.ReactNode;
  image?: ReactHtmlImageElement;
}

export function Hero1({ children, image }: Hero1Props): React.ReactElement {
  return (
    <StyledHero1>
      <div aria-hidden="true" className="hero1__background-area">
        <FoursevensIcon />
      </div>
      <div className="hero1__children">
        <TextBlock>{children}</TextBlock>
      </div>
      <div aria-hidden="true" className="hero1__image-area">
        {image}
      </div>
    </StyledHero1>
  );
}
