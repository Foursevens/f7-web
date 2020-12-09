import React from 'react';

import MapMarker from '../assets/fa-solid-map-marker-alt.svg';
import { styled } from './stitches.config';

const StyledMap = styled('div', {
  position: 'relative',

  svg: { position: 'absolute' },

  // Rue du Houblon 63, Brussel
  'svg:nth-of-type(1)': { left: '58%', top: '58%' },
  // Kasteellaan 349A, Gent
  'svg:nth-of-type(2)': { left: '35.9%', top: '-3%' },
});

export interface MapProps {
  children: React.ReactNode;
}

export function Map({ children }: MapProps): React.ReactElement {
  return (
    <StyledMap>
      {children}
      <MapMarker />
      <MapMarker />
    </StyledMap>
  );
}
