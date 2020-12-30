import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import ArrowButton from '../assets/arrow-button.svg';
import { styled } from './stitches.config';

type Design = 'primary' | 'secondary' | 'tertiary';
type DesignHover = 'primary' | 'secondary';

const DEFAULT_DESIGN_HOVER_MAP: Record<Design, DesignHover> = {
  primary: 'secondary',
  secondary: 'primary',
  tertiary: 'primary',
};

const StyledButtonLink = styled('div', {
  display: 'inline-flex',
  height: 40,
  alignItems: 'center',

  border: 0,
  borderRadius: 100,
  padding: '0 25px',

  color: '$white1',
  fontFamily: '$lato',
  fontWeight: '$book',
  fontSize: '1em', // 16px

  variants: {
    design: {
      primary: { backgroundColor: '$primary1', color: '$white1' },
      secondary: { backgroundColor: '$secondary1', color: '$white1' },
      tertiary: {
        backgroundColor: '$white1',
        border: '1px solid $primary1',
        color: '$primary1',
      },
    },
    designHover: {
      primary: {
        ':hover': { backgroundColor: '$primary1', color: '$white1' },
      },
      secondary: {
        ':hover': { backgroundColor: '$secondary1', color: '$white1' },
      },
    },
  },

  svg: {
    marginRight: '$sm',
  },
});

export interface ButtonLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  design: 'primary' | 'secondary' | 'tertiary';
  designHover?: 'primary' | 'secondary';
  target?: string;
}

export function ButtonLink({
  design,
  designHover,
  ...props
}: ButtonLinkProps): React.ReactElement {
  const reference = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, reference);
  const { children, href, target } = props;

  return (
    <StyledButtonLink
      design={design}
      designHover={designHover ?? DEFAULT_DESIGN_HOVER_MAP[design]}
    >
      <a {...linkProps} ref={reference} href={href} target={target}>
        <ArrowButton />
        {children}
      </a>
    </StyledButtonLink>
  );
}
