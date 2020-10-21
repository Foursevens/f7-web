import React from 'react';

import { styled } from './stitches.config';
import { ImageProps } from './types';

const ImageEndContainer = styled('div', {
  width: 'min(var(--image-size), 400px, 40vw)',
  height: 'min(var(--image-size), 400px, 40vw)',
  overflow: 'none',

  backgroundColor: '$primary2',
  boxShadow: '15px 15px 0 $primary2',

  img: { height: '100%', objectFit: 'cover' },
});

const StyledContentBlock = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'space-between',

  '.content-block__side': { flex: '1 0' },
  '.content-block__image-side': {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    maxWidth: 'min(400px, 40vw)',
  },
  '.content-block__content-side': {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',

    'h1, h2, h3, h4, h5, h6': {
      marginBottom: 20,
    },

    strong: { order: -1, marginBottom: 15 },

    p: {
      maxWidth: '70ch',
      marginBottom: '$medium',
    },
  },

  variants: {
    imagePosition: {
      start: {
        '.content-block__content-side': { paddingLeft: 96 },
        '.content-block__image-side': { order: -1 },
      },
      end: {
        '.content-block__content-side': { order: -1 },
        '.content-block__image-side': { paddingLeft: 96 },
      },
    },
  },
});

export interface ContentBlockProps {
  children: React.ReactNode;
  image?: ImageProps & { position?: 'start' | 'end' };
}

export function ContentBlock({
  children,
  image,
}: ContentBlockProps): React.ReactElement {
  const imageSize =
    image == null || image.position === 'start'
      ? Infinity
      : Math.max(image.width, image.height);
  return (
    <StyledContentBlock imagePosition={image?.position}>
      {React.Children.count(children) === 0 ? null : (
        <div className="content-block__side content-block__content-side">
          {children}
        </div>
      )}
      {image == null ? null : (
        <div className="content-block__side content-block__image-side">
          {image.position === 'start' ? (
            <img
              alt="decorative"
              height={image.height}
              src={image.url}
              width={image.width}
            />
          ) : (
            <ImageEndContainer style={{ '--image-size': `${imageSize}px` }}>
              <img
                alt="decorative"
                height={imageSize}
                src={image.url}
                width={imageSize}
              />
            </ImageEndContainer>
          )}
        </div>
      )}
    </StyledContentBlock>
  );
}
