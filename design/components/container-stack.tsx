import React from 'react';

import { Container } from './container';
import { styled } from './stitches.config';

const EVEN = 2;

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
}

export function ContainerStack({
  children,
  margin,
  padding,
}: ContainerStackProps): React.ReactElement {
  return (
    <StyledContainerStack margin={margin}>
      {React.Children.map(
        children,
        (child, index): React.ReactElement => (
          <Container
            background={index % EVEN === 0 ? 'white2' : 'white1'}
            padding={padding}
          >
            {child}
          </Container>
        ),
      )}
    </StyledContainerStack>
  );
}
