import React from 'react';

import FoursevensIcon from '../assets/foursevens-icon.svg';
import { Container } from './container';
import { styled } from './stitches.config';

const StyledHeroContact = styled(Container.Outer, {
  padding: '$lg 0',
  md: { padding: '$xl 0' },

  '&> .inner > ul': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    md: { gridTemplateColumns: 'repeat(2, 1fr)' },
    gridTemplateRows: 'auto',
    maxWidth: '50%',

    '&> li': { marginTop: '60px' },
  },

  '.hero-contact__background-area': {
    gridArea: '1 / 8 / 2 / 15',
    overflow: 'hidden',
    position: 'relative',
    svg: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translate(25%, -50%) scale(0.75)',
      transformOrigin: 'center right',
    },
  },
});

export interface HeroContactProps {
  children: React.ReactNode;
}

export function HeroContact({
  children,
}: HeroContactProps): React.ReactElement {
  return (
    <StyledHeroContact background="primary2">
      <Container.Inner className="inner">{children}</Container.Inner>
      <div aria-hidden="true" className="hero-contact__background-area">
        <FoursevensIcon />
      </div>
    </StyledHeroContact>
  );
}

const StyledContactChannel = styled('div', {
  'li, p': {
    margin: '$xs 0',
    color: '$primary1',
    fontFamily: '$lato',
    fontWeight: '$black',
  },

  'li + li, p + p': {
    marginTop: '$md',
  },

  a: {
    textDecoration: 'none',
  },
});

HeroContact.Channel = StyledContactChannel;
