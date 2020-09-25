import React from 'react';

import { styled } from './stitches.config';

export interface HeaderProps {
  children: React.ReactElement[];
}

const StyledHeader = styled('header', {
  height: 102,
  display: 'flex',
  alignItems: 'center',
  '> * + *': { marginLeft: '$medium' },
});

const LogoWrapper = styled('div', {
  height: 45,
  flexGrow: 1,
  img: { maxHeight: '100%' },
});

export function Header({
  children: [logo, ...rest],
}: HeaderProps): React.ReactElement {
  return (
    <StyledHeader>
      <LogoWrapper>{logo}</LogoWrapper>
      {rest}
    </StyledHeader>
  );
}
