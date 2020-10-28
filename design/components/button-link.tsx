import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import ArrowButton from '../assets/arrow-button.svg';
import { styled } from './stitches.config';

const StyledButtonLink = styled('div', {
  display: 'inline-flex',
  height: 40,
  alignItems: 'center',

  border: 0,
  borderRadius: 100,
  padding: '0 25px',

  color: '$white1',
  stroke: '$white1',
  fontFamily: '$lato',
  fontWeight: '$book',
  fontSize: '1em', // 16px

  variants: {
    background: {
      primary: { backgroundColor: '$primary1' },
      secondary: { backgroundColor: '$secondary1' },
    },
  },

  svg: {
    marginRight: '$sm',
    stroke: '$white1',
  },
});

export interface ButtonLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  background?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export function ButtonLink({
  background = 'primary',
  ...props
}: ButtonLinkProps): React.ReactElement {
  const reference = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, reference);
  const { children, href, target } = props;
  return (
    <StyledButtonLink background={background}>
      <a {...linkProps} ref={reference} href={href} target={target}>
        <ArrowButton />
        {children}
      </a>
    </StyledButtonLink>
  );
}
