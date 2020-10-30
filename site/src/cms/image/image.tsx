import { ReactHtmlImageElement } from '@f7-web/design';
import React from 'react';

import { SiteImageModel } from './types';

interface Props {
  image?: SiteImageModel;
}

export function SiteImage({ image }: Props): ReactHtmlImageElement | null {
  return image == null ? null : (
    <img
      alt={image.alternativeText}
      height={image.height}
      src={image.url}
      width={image.width}
    />
  );
}
