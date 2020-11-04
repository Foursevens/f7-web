import React, { useEffect, useRef } from 'react';

import { styled } from './stitches.config';
import { TextBlock } from './text-block';
import { ReactHtmlImageElement } from './types';

const StyledCard = styled('article', {
  cursor: 'pointer',

  '.card__image-container': {
    overflow: 'hidden',
    img: {
      transform: 'scale(1.1)',
      transition: `transform .6s ease`,
    },
  },

  '&:hover,:focus-within': {
    img: { transform: 'scale(1.2)' },
  },
  '&:focus-within': {
    boxShadow: '0 0 0 0.25em $primary1',
  },

  '.card__content-container': {
    position: 'relative',
    zIndex: 1,
    margin: '-$lg $lg 0 0',
  },
});

export interface CardProps {
  background?: '$white1' | '$white2';
  children: React.ReactNode;
  image?: ReactHtmlImageElement;
}

export function Card({
  background = '$white2',
  children,
  image,
}: CardProps): React.ReactElement {
  const cardReference = useRef<HTMLElement>(null);
  const linkReference = useRef<HTMLAnchorElement>();

  useEffect(() => {
    linkReference.current =
      cardReference.current?.querySelector('a') ?? undefined;
  });

  const handleClick = (event: React.MouseEvent): void => {
    if (
      linkReference.current == null ||
      linkReference.current === event.target
    ) {
      return;
    }
    event.preventDefault();
    linkReference.current.click();
  };

  return (
    <StyledCard ref={cardReference} onClick={handleClick}>
      <div className="card__image-container">{image}</div>
      <div className="card__content-container">
        <TextBlock css={{ background, padding: '$md' }} terse>
          {children}
        </TextBlock>
      </div>
    </StyledCard>
  );
}
