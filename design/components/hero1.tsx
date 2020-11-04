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
      width: 200,
      height: 200,
      right: 0,
      top: '50%',
      transform: 'translate(25%, -50%)',
    },
  },

  '.hero1__children': {
    gridArea: '1 / 2 / 2 / 14',
    alignSelf: 'center',
    maxWidth: '60ch',
    paddingBottom: '$lg',
  },

  '.hero1__image-area': {
    gridArea: '2 / 1 / 3 / 15',

    img: { width: '100%', height: '100%', objectFit: 'cover' },
  },

  lg: {
    gridTemplateRows: 'auto 100px',
    '.hero1__background-area': {
      gridArea: '1 / 1 / 2 / 8',
      svg: {
        width: 250,
        height: 250,
        left: 0,
        bottom: 0,
        top: 'initial',
        transform: 'translateX(-25%)',
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
