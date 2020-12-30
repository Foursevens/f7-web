import { ReactHtmlImageElement } from '@f7-web/design';
import React from 'react';

import { apiBaseUrl } from '../api';
import { CmsImageModel } from '../cms';

interface Props {
  image: CmsImageModel | null | undefined;
}

export function SiteImage({ image }: Props): ReactHtmlImageElement | null {
  if (image == null) {
    return null;
  }

  const imageUrl = image.url.startsWith('http')
    ? image.url
    : `${apiBaseUrl}${image.url}`;

  return (
    <img
      alt={image.alternativeText}
      height={image.height}
      src={imageUrl}
      width={image.width}
    />
  );
}
