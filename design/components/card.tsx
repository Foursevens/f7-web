import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import { styled } from './stitches.config';

const StyledCard = styled('a', {
  img: { height: 324, width: 406 },
  position: 'relative',
  outline: 'none',
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
      <div>{duurzaamheid}</div>
      {rest}
    </StyledCard>
  );
}
