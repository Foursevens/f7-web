import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      $primaryDark1: '#162a2b',
      $primary1: '#367d7e',
      $primary2: '#e1ecec',
      $secondary1: '#f7b32b',
      $white1: '#fff',
      $white2: '#f7f7f7',
    },
    fonts: {
      $lato:
        'Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    fontSizes: {
      '$text-xs': '14px',
      '$text-sm': '15px',
      '$text-md': '16px',
      '$text-lg': '22px',
      '$title-sm': '20px',
      '$title-md': '30px',
      '$title-lg': '40px',
      '$title-xl': '45px',
    },
    fontWeights: {
      $book: '300',
      $medium: '400',
      $heavy: '700',
      $black: '900',
    },
    space: {
      $small: '10px',
      $medium: '15px',
      $large: '20px',
      $xlarge: '40px',
    },
  },
});
