import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { ContentBlock } from './content-block';
import { styled } from './stitches.config';

const StyledHero1 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr repeat(2, calc(1284px / 2)) 1fr',
  gridTemplateRows: 'calc(100% - 100px) auto',
  height: 'calc(1284px / 2)',

  '.hero1__background': {
    gridColumn: '1 / 4',
    gridRow: '1 / 2',
    backgroundColor: '$primary2',

    position: 'relative',
    zIndex: -1,
    svg: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform: 'translateX(-25%)',
    },
  },

  '.hero1__content': {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    alignSelf: 'center',
    maxWidth: '62ch',
  },

  '.hero1__image': {
    gridColumn: '3 / 5',
    gridRow: '1 / 3',
  },
});

export interface Hero1Props {
  children: React.ReactNode;
  image?: { url: string };
}

export function Hero1({ children, image }: Hero1Props): React.ReactElement {
  return (
    <StyledHero1>
      <div aria-hidden="true" className="hero1__background">
        <FoursevensIcon />
      </div>
      <div className="hero1__content">
        <ContentBlock>{children}</ContentBlock>
      </div>
      <div aria-hidden="true" className="hero1__image">
        {image == null ? null : <img alt="decorative" src={image.url} />}
      </div>
    </StyledHero1>
  );
}
