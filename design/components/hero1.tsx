import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { ContentBlock } from './content-block';
import { styled } from './stitches.config';

const StyledHero1 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr repeat(12, calc(1284px / 12)) 1fr',
  gridTemplateRows: 'min(1284px / 2, calc(75vh - 100px)) 100px',

  '.hero1__background-area': {
    gridColumn: '1 / 8',
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

  '.hero1__children': {
    gridColumn: '2 / 6',
    gridRow: '1 / 2',
    alignSelf: 'center',
    maxWidth: '60ch',
  },

  '.hero1__image-area': {
    gridColumn: '8 / 15',
    gridRow: '1 / 3',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
});

export interface Hero1Props {
  children: React.ReactNode;
  image?: { url: string };
}

export function Hero1({ children, image }: Hero1Props): React.ReactElement {
  return (
    <StyledHero1>
      <div aria-hidden="true" className="hero1__background-area">
        <FoursevensIcon />
      </div>
      <div className="hero1__children">
        <ContentBlock>{children}</ContentBlock>
      </div>
      <div aria-hidden="true" className="hero1__image-area">
        {image == null ? null : <img alt="decorative" src={image.url} />}
      </div>
    </StyledHero1>
  );
}
