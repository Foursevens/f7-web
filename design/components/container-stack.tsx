import React from 'react';

import { Container } from './container';
import { styled } from './stitches.config';

const BACKGROUNDS = ['white1' as const, 'white2' as const];

const StyledContainerStack = styled('div', {
  variants: {
    margin: {
      true: { margin: '$xl 0' },
    },
  },
});

export interface ContainerStackProps {
  children: React.ReactNode;
  margin?: boolean;
  padding?: boolean;
  reverse?: boolean;
}

export function ContainerStack({
  children,
  margin,
  padding,
  reverse = false,
}: ContainerStackProps): React.ReactElement {
  return (
    <StyledContainerStack margin={margin}>
      {React.Children.map(
        children,
        (child, index): React.ReactElement => {
          const toggle = index % BACKGROUNDS.length;
          return (
            <Container
              background={BACKGROUNDS[reverse ? toggle : 1 - toggle]}
              padding={padding}
            >
              {child}
            </Container>
          );
        },
      )}
    </StyledContainerStack>
  );
}
