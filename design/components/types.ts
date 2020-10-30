import React from 'react';

export type ReactHtmlImageElement = React.ReactElement<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>;
