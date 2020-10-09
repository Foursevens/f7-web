import React from 'react';

import { styled } from './stitches.config';

const StyledCard = styled('section', {
  display: 'inline-block',
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    transition: `transform .6s ease`,
  },
  outline: 'none',
  position: 'relative',

  'a::after': { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },

  '.card__image-container': {
    overflow: 'hidden',
  },

  ':first-child:hover img': {
    transform: 'scale(1.2)',
  },

  '.card__content-container': {
    display: 'flex',
    flexFlow: 'column nowrap',
    position: 'absolute',
    top: 264,
    left: 0,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  '.card__content-container > *': {
    marginBottom: 3,
  },
});

export interface CardProps {
  img: string;
  children: React.ReactNode;
}

export function Card({ img, children }: CardProps): React.ReactElement {
  return (
    <StyledCard>
      <div className="card__image-container">
        {' '}
        <img alt="decorative" src={img} />
      </div>
      <div className="card__content-container">{children}</div>
    </StyledCard>
  );
}
