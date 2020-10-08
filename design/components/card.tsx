import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import { styled } from './stitches.config';

const StyledCard = styled('a', {
  display: 'inline-block',
  img: { height: '100%', width: '100%', transition: `transform .6s ease` },
  outline: 'none',
  position: 'relative',
  '.img-container': {
    height: 324,
    width: 406,
    overflow: 'hidden',
  },
  ':first-child:hover img': {
    transform: 'scale(1.2)',
  },
});

export const ContentContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: 264,
  left: 0,
  flexFlow: 'column nowrap',
  width: 376,
  backgroundColor: '#ffffff',
  main: {
    margin: '$medium',
  },
  'main > *': {
    paddingBottom: 3,
  },
});
export interface CardProps {
  href: string;
  target: string;
  children: React.ReactNode;
}
export function Card({
  children: [duurzaamheid, ...rest],
  ...props
}: CardProps): React.ReactElement {
  const reference = useRef<HTMLElement>(null);
  const { linkProps } = useLink(props as never, reference);
  const { href } = props;
  return (
    <StyledCard {...linkProps} href={href}>
      <div className="img-container">{duurzaamheid}</div>
      {rest}
    </StyledCard>
  );
}
