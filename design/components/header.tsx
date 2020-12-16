import React, { useState } from 'react';

import { BreakPoint, useBreakPoint } from './hooks';
import { Menu } from './menu';
import { styled } from './stitches.config';

const BREAK_POINTS_MOBILE_MENU: BreakPoint[] = ['xs', 'sm'];

const StyledHeader = styled('header', {
  height: 100,
  display: 'flex',
  alignItems: 'center',

  svg: {
    cursor: 'pointer',
    color: '$primary1',
    fontSize: 30,
  },

  '.mobile-menu': {
    position: 'fixed',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary2',
  },

  variants: {
    mobileMenuOpen: {
      true: {
        '.fa-bars': { display: 'none' },
      },
      false: {
        '.fa-times, .mobile-menu': { display: 'none' },
      },
    },
  },
});

const LogoWrapper = styled('div', {
  flexGrow: 1,
  img: { maxWidth: 200 },
});

export interface HeaderProps {
  children: React.ReactElement[];
  logo?: React.ReactNode;
}

export function Header({ children, logo }: HeaderProps): React.ReactElement {
  const breakpoint = useBreakPoint();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuTogglePress = (): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <StyledHeader mobileMenuOpen={isMobileMenuOpen}>
      <LogoWrapper>{logo}</LogoWrapper>
      {BREAK_POINTS_MOBILE_MENU.includes(breakpoint) ? (
        <>
          <button onClick={handleMenuTogglePress} type="button">
            <i className="fal fa-bars" />
            <i className="fal fa-times" />
          </button>
          <div className="mobile-menu">
            <Menu mobile>{children}</Menu>
          </div>
        </>
      ) : (
        <Menu>{children}</Menu>
      )}
    </StyledHeader>
  );
}
