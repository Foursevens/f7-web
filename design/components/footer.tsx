import React, { ReactNode } from 'react';

import FoursevensLogoWhite from '../assets/logo.svg';
import { Container } from './container';
import { styled } from './stitches.config';

const StyledFooter1Outer = styled(Container.Outer, {
  backgroundImage:
    'linear-gradient(to right, #367d7e, rgba(38, 159, 158, 0.5))',
});

const StyledFooter1Inner = styled(Container.Inner, {
  display: 'flex',
  flexFlow: 'column nowrap',
  padding: '$lg 0',

  color: '$white1',
  fontFamily: '$lato',

  '.logo': {
    margin: '0 $lg $lg 0',
    filter: 'brightness(0) invert(1)',
  },
});

const StyledFooter2Outer = styled(Container.Outer, {
  backgroundColor: '$white1',
});

const StyledFooter2Inner = styled(Container.Inner, {
  padding: '$md 0',
  color: '$primary1',
  fontFamily: '$lato',
  fontWeight: '$book',
});

export interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps): React.ReactElement {
  return (
    <footer>
      <StyledFooter1Outer>
        <StyledFooter1Inner>
          <div aria-hidden="true" className="logo">
            <FoursevensLogoWhite />
          </div>
          {children}
        </StyledFooter1Inner>
      </StyledFooter1Outer>
      <StyledFooter2Outer>
        <StyledFooter2Inner>&copy; Foursevens</StyledFooter2Inner>
      </StyledFooter2Outer>
    </footer>
  );
}

Footer.Section = styled('section', {
  header: {
    marginBottom: '25px',
    fontWeight: '$black',
  },
  main: {
    fontWeight: '$book',
  },
});

Footer.AddressList = styled('ul', {
  display: 'flex',
  flexFlow: 'row wrap',

  li: {
    margin: '0 $lg $md 0',
    lineHeight: 1.5,
  },
});

Footer.ContactList = styled('ul', {
  li: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    margin: '$xs 0',
  },
  svg: {
    marginRight: '$xs',
  },
});

Footer.MenuList = styled('ul', {
  li: {
    margin: '$xs 0',
  },
});
