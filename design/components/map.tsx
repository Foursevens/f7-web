import React from 'react';

import MapMarker from '../assets/fa-solid-map-marker-alt.svg';
import { styled } from './stitches.config';

const StyledMap = styled('div', {
  position: 'relative',
  marginBottom: -5,

  svg: {
    position: 'absolute',
    color: '$secondary1',
    transform: 'translate(-50%, -100%)',
    transformOrigin: 'bottom center',
  },

  // Rue du Houblon 63, Brussel
  'svg:nth-of-type(1)': { left: '52.5%', top: '71%' },
  // Kasteellaan 349A, Gent
  'svg:nth-of-type(2)': { left: '39.4%', top: '38.5%' },
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
