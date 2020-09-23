import React from 'react';

import { styled } from './stitches.config';

export interface MenuProps {
  children:
    | React.ReactElement<{ key: string }>
    | Array<React.ReactElement<{ key: string }>>;
}

const List = styled('ul', { margin: 0 });

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
  height: 40,

  color: '$primary1',
  fontSize: 15,
  textTransform: 'lowercase',

  variants: {
    highlight: {
      false: {
        padding: '0 $large',
      },
      true: {
        padding: '$small $large',
        border: '1px solid $secondary1',
        borderRadius: 100,
      },
    },
  },

  a: {
    color: 'inherit',
  },
});

MenuItem.defaultProps = {
  highlight: false,
};
