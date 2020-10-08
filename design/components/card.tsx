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

  '.card-img-container': {
    height: 324,
    width: 406,
    overflow: 'hidden',
  },

  ':first-child:hover img': {
    transform: 'scale(1.2)',
  },

  '.CardContentContainer': {
    display: 'flex',
    flexFlow: 'column nowrap',
    position: 'absolute',
    top: 264,
    left: 0,
    width: 376,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  '.CardContentContainer > *': {
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
      <div className="card-img-container">
        {' '}
        <img alt="decorative" src={img} />,
      </div>
      <div className="CardContentContainer">{children}</div>
    </StyledCard>
  );
}
