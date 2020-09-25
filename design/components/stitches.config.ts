import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  // prefix: '',
  tokens: {
    colors: {
      $primaryDark1: '#162a2b',
      $primary1: '#367d7e',
      $primary2: '#e1ecec',
      $secondary1: '#f7b32b',
      $white1: '#fff',
    },
    space: {
      $small: '10px',
      $medium: '15px',
      $large: '20px',
      $xlarge: '40px',
    },
  },
  // breakpoints: {},
  // utils: {},
});
