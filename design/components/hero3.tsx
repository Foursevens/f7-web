import React from 'react';

import { Container } from './container';
import { styled } from './stitches.config';
import { ReactHtmlImageElement } from './types';

const StyledHero3 = styled(Container.Outer, {
  '.hero3__children': {
    gridArea: '1 / 2 / 2 / 14',
    padding: '$md 0',
  },

  '.hero3__image-area': {
    gridArea: '2 / 1 / 3 / 15',
    textAlign: 'right',
    img: { width: '100%' },
  },

  lg: {
    '.hero3__children': {
      gridArea: '1 / 2 / 2 / 6',
      marginTop: 100,
    },
    '.hero3__image-area': {
      gridArea: '1 / 7 / 2 / 14',
      minHeight: 350,
    },
  },
});

const StyledBackLink = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  marginTop: '$sm',
  fontFamily: '$lato',
  fontSize: '$text-md',
  fontWeight: '$medium',

  svg: { stroke: '$grey1' },

  a: {
    display: 'inline-block',
    marginLeft: '$sm',
    color: '$grey1',
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
          <StyledBackLink>
            <svg height="8" width="5">
              <path d="M 4 1 L 1 4 L 4 7" fill="none" strokeWidth="2" />
            </svg>
            {backLink}
          </StyledBackLink>
        )}
      </div>
    </StyledHero3>
  );
}
