import { StitchesProps } from '@stitches/react';
import React from 'react';

import { styled } from './stitches.config';

const List = styled('ul', {
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  margin: 0,
  padding: 0,

  variants: {
    mobile: {
      true: {
        flexDirection: 'column',
      },
      false: {
        flexDirection: 'row',
        height: 40,
      },
    },
  },
});

const ListItem = styled('li', {
  variants: {
    mobile: {
      true: {
        '+ li': { marginTop: '$md' },
      },
      false: {
        display: 'inline-block',
        '+ li': { marginLeft: '$lg' },
      },
    },
  },
});

export interface MenuProps {
  children:
    | React.ReactElement<{ key: string }>
    | Array<React.ReactElement<{ key: string }>>;
  mobile?: boolean;
}

export function Menu({
  children,
  mobile = false,
}: MenuProps): React.ReactElement {
  return (
    <nav>
      <List mobile={mobile}>
        {React.Children.map(children, (child) => (
          <ListItem key={child.key ?? undefined} mobile={mobile}>
            {child}
          </ListItem>
        ))}
      </List>
    </nav>
  );
}

const StyledMenuItem = styled('div', {
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
        padding: '$xs $md',
        border: '1px solid $secondary1',
        borderRadius: 100,
      },
    },
  },

  a: {
    margin: '-$xs -$md',
    padding: '$xs $md',
    color: 'inherit',
    fontWeight: '$medium',
    textDecoration: 'none',
  },
});

StyledMenuItem.compoundVariant(
  { active: 'yes', highlight: 'yes' },
  {
    backgroundColor: '$secondary1',
    color: '$white1',
  },
);

StyledMenuItem.compoundVariant(
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

export function MenuItem(
  props: StitchesProps<typeof StyledMenuItem>,
): React.ReactElement {
  return <StyledMenuItem {...props} />;
}
