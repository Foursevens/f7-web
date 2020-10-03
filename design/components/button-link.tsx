/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import { styled } from './stitches.config';

const StyledAnchor = styled('a', {
  display: 'inline-flex',
  height: 40,
  alignItems: 'center',

  border: 0,
  borderRadius: 100,
  padding: '0 25px',

  color: '$white1',
  stroke: '$white1',
  fontFamily: '$proxima',
  fontWeight: '$medium',
  fontSize: '1em',

  variants: {
    background: {
      primary: { backgroundColor: '$primary1' },
      secondary: { backgroundColor: '$secondary1' },
    },
  },
});

export interface ButtonLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  as?: any;
  background?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export function ButtonLink({
  as,
  background = 'primary',
  ...props
}: ButtonLinkProps): React.ReactElement {
  const reference = useRef<HTMLElement>(null);
  const { linkProps } = useLink(props as any, reference);
  const { children, target, href } = props;
  return (
    <StyledAnchor
      ref={reference as React.RefObject<HTMLAnchorElement>}
      as={as}
      background={background}
      href={href}
      target={target}
      {...linkProps}
    >
      <svg height="16" style={{ marginRight: 13 }} width="10">
        <path d="M 2 2 L 8 8 L 2 14" fill="none" strokeWidth="2" />
      </svg>
      {children}
    </StyledAnchor>
  );
}
