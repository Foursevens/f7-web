import React from 'react';

import { styled } from './stitches.config';

const StyledCard = styled('section', {
  display: 'inline-block',
  outline: 'none',
  position: 'relative',

  '.card__image-container': {
    overflow: 'hidden',
    img: {
      transform: 'scale(1.1)',
      transition: `transform .6s ease`,
    },
  },

  ':hover img': {
    transform: 'scale(1.2)',
  },

  '.card__content-container': {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '90%',
    transform: 'translateY(-55px)',
    padding: '$large',

    'a::after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  '.card__content-container > *': {
    marginBottom: 3,
  },

  variants: {
    background: {
      white1: { '.card__content-container': { backgroundColor: '$white1' } },
      white2: { '.card__content-container': { backgroundColor: '$white2' } },
    },
  },
});

export interface CardProps {
  background: 'white1' | 'white2';
  img: string;
  children: React.ReactNode;
}

export function Card({
  background = 'white1',
  img,
  children,
}: CardProps): React.ReactElement {
  return (
    <StyledCard background={background}>
      <div className="card__image-container">
        <img alt="decorative" src={img} />
      </div>
      <div className="card__content-container">{children}</div>
    </StyledCard>
  );
}
