import React, { useEffect, useRef, useState } from 'react';

import { AspectRatioBox } from './aspect-ratio-box';
import { styled } from './stitches.config';
import { TextBlock } from './text-block';
import { ReactHtmlImageElement } from './types';

const CLICK_DELTA_MAX = 5;

const StyledCard = styled('article', {
  cursor: 'pointer',

  img: {
    transition: `transform .6s ease`,
  },

  '&:hover,:focus-within': {
    img: { transform: 'scale(1.1)' },
  },
  '&:focus-within': {
    boxShadow: '0 0 0 0.25em $primary1',
  },

  '.card__content-container': {
    position: 'relative',
    zIndex: 1,
    margin: '-$lg $lg 0 0',

    'p:not(:first-of-type)': { display: 'none' },
    'p:first-of-type': {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 3,
    },
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
  }, []);

  const [mouseDown, setMouseDown] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const handleMouseDown = (event: React.MouseEvent): void => {
    if (linkReference.current == null) {
      return;
    }
    setMouseDown({ x: event.pageX, y: event.pageY });
  };
  const handleMouseUp = (event: React.MouseEvent): void => {
    if (
      mouseDown == null ||
      linkReference.current == null ||
      linkReference.current === event.target
    ) {
      return;
    }
    const delta = Math.sqrt(
      Math.abs(event.pageX - mouseDown.x) + Math.abs(event.pageY - mouseDown.y),
    );
    if (delta > CLICK_DELTA_MAX) {
      return;
    }
    event.preventDefault();
    linkReference.current.click();
  };

  return (
    <StyledCard
      ref={cardReference}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AspectRatioBox aspectRatio={1.5}>{image}</AspectRatioBox>
      <div className="card__content-container">
        <TextBlock css={{ background, padding: '$md' }} terse>
          {children}
        </TextBlock>
      </div>
    </StyledCard>
  );
}
