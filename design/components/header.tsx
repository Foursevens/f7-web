import React from 'react';

import { MenuProps } from './menu';
import { styled } from './stitches.config';

export interface HeaderProps {
  children: [
    React.ReactElement<HTMLImageElement>,
    React.ReactElement<MenuProps>,
  ];
}

const StyledHeader = styled('header', {
  width: 1262,
  height: 102,
  display: 'flex',
  alignItems: 'center',
  padding: '$small',
  backgroundColor: '$primary2',
  '> * + *': { marginLeft: '$medium' },
});

const LogoWrapper = styled('div', { height: 45, flexGrow: 1 });

export function Header({
  children: [logo, menu],
}: HeaderProps): React.ReactElement {
  const constrainedLogo = React.cloneElement(logo, {
    style: ({ maxHeight: '100%' } as any) as CSSStyleDeclaration,
  });
  return (
    <StyledHeader>
      <LogoWrapper>{constrainedLogo}</LogoWrapper>
      {menu}
    </StyledHeader>
  );
}
