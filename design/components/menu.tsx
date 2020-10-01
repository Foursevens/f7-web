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
  fontSize: '0.9375em', // 15px
  textTransform: 'lowercase',

  variants: {
    active: { true: {} },
    highlight: {
      true: {
        padding: '$small $large',
        border: '1px solid $secondary1',
        borderRadius: 100,
      },
    },
  },

  a: {
    color: 'inherit',
    fontWeight: '$medium',
    textDecoration: 'none',
  },
});

MenuItem.compoundVariant(
  { active: true, highlight: true },
  {
    backgroundColor: '$secondary1',
    color: '$white1',
  },
);

MenuItem.compoundVariant(
  { active: true, highlight: false },
  {
    position: 'relative',
    '::after': {
      content: `""`,
      position: 'absolute',
      display: 'block',
      width: 'calc(100% + 10px)',
      marginTop: 25,
      marginInline: -5,
      borderBottom: '2px solid $secondary1',
    },
  },
);

MenuItem.defaultProps = {
  active: false,
  highlight: false,
};
