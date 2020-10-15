import React from 'react';

import { styled } from './stitches.config';

export interface MenuProps {
  children:
    | React.ReactElement<{ key: string }>
    | Array<React.ReactElement<{ key: string }>>;
}

const List = styled('ul', {
  display: 'inline-flex',
  alignItems: 'center',
  height: 40,
  margin: 0,
  padding: 0,
});

const ListItem = styled('li', {
  display: 'inline-block',
  '+ li': { marginLeft: '$xlarge' },
});

export function Menu({ children }: MenuProps): React.ReactElement {
  return (
    <nav>
      <List>
        {(Array.isArray(children) ? children : [children]).map((child) => (
          <ListItem key={child.key ?? undefined}>{child}</ListItem>
        ))}
      </List>
    </nav>
  );
}

export const MenuItem = styled('div', {
  display: 'flex',
  alignItems: 'center',

  color: '$primary1',
  fontFamily: '$lato',
  fontSize: '0.9375em', // 15px
  fontWeight: '$medium',
  textTransform: 'lowercase',

  variants: {
    active: {
      no: {},
      yes: {},
    },
    highlight: {
      no: {},
      yes: {
        padding: '$small $large',
        border: '1px solid $secondary1',
        borderRadius: 100,
      },
    },
  },

  a: {
    margin: '-$small -$large',
    padding: '$small $large',
    color: 'inherit',
    fontWeight: '$medium',
    textDecoration: 'none',
  },
});

MenuItem.compoundVariant(
  { active: 'yes', highlight: 'yes' },
  {
    backgroundColor: '$secondary1',
    color: '$white1',
  },
);

MenuItem.compoundVariant(
  { active: 'yes', highlight: 'no' },
  {
    position: 'relative',
    '::after': {
      content: `""`,
      position: 'absolute',
      display: 'block',
      width: 'calc(100% + 10px)',
      marginLeft: -5,
      borderBottom: '2px solid $secondary1',
      transform: 'translateY(13px)',
    },
  },
);

MenuItem.defaultProps = {
  active: 'no',
  highlight: 'no',
};
