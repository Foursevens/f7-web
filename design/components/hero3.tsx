import React from 'react';

import { styled } from './stitches.config';
import { ReactHtmlImageElement } from './types';

const StyledHero3 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr repeat(12, calc(1284px / 12)) 1fr',
  minHeight: 400,

  '.hero3__children': {
    gridColumn: '2 / 7',
    gridRow: '1 / 2',
    marginTop: 100,
  },

  '.hero3__image-area': {
    gridColumn: '8 / 14',
    gridRow: '1 / 2',
    textAlign: 'right',

    img: {
      width: '100%',
    },
  },

  '.hero3__back-link': {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '$sm',

    svg: {
      stroke: '$grey1',
    },

    a: {
      display: 'inline-block',
      marginLeft: '$sm',
      color: '$grey1',
    },
  },
});

export interface Hero3Props {
  backLink?: React.ReactNode;
  children: React.ReactNode;
  image?: ReactHtmlImageElement;
}

export function Hero3({
  backLink,
  children,
  image,
}: Hero3Props): React.ReactElement {
  return (
    <StyledHero3>
      <div className="hero3__children">{children}</div>
      <div aria-hidden="true" className="hero3__image-area">
        {image}
        {backLink == null ? null : (
          <div className="hero3__back-link">
            <svg height="8" width="5">
              <path d="M 4 1 L 1 4 L 4 7" fill="none" strokeWidth="2" />
            </svg>
            {backLink}
          </div>
        )}
      </div>
    </StyledHero3>
  );
}
