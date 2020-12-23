import React, { useMemo } from 'react';

import { AspectRatioBox } from './aspect-ratio-box';
import { styled } from './stitches.config';
import { TextBlockProps } from './text-block';
import { ReactHtmlImageElement } from './types';

const StyledContentBlock = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(12, 1fr)',
  alignItems: 'center',

  '&> :first-child': {
    gridArea: '1 / 1 / 2 / 13',
    justifySelf: 'center',
  },
  '&> :last-child:not(:only-child)': {
    gridArea: '2 / 1 / 3 / 13',
    justifySelf: 'center',
  },

  md: {
    '&> :first-child': { gridArea: '1 / 1 / 2 / 6' },
    '&> :last-child:not(:only-child)': { gridArea: '1 / 7 / 2 / 13' },
  },
});

const StyledImageEnd = styled(AspectRatioBox, {
  backgroundColor: '$primary2',
  boxShadow: '15px 15px 0 $primary2',
});

export interface ContentBlockProps {
  children: React.ReactElement<TextBlockProps>;
  image?: ReactHtmlImageElement;
  imageAtEnd?: boolean;
}

export function ContentBlock({
  children,
  image,
  imageAtEnd = false,
}: ContentBlockProps): React.ReactElement {
  const imageSize = useMemo((): number | string => {
    if (image == null) {
      return -1;
    }
    let props:
      | undefined
      | { width?: string | number; height?: string | number };
    if (image.type === 'img') {
      props = image.props;
    } else if ('image' in image.props) {
      const { image: imageProperties } = image.props as {
        image?: { width?: string | number; height?: string | number };
      };
      if (imageProperties?.width != null && imageProperties.height != null) {
        props = imageProperties;
      }
    }
    if (props == null) {
      // eslint-disable-next-line no-console
      console.warn('could not determine image size for', image);
      return -1;
    }
    const minSize = Math.min(Number(props.width), Number(props.height));
    return `min(100%, ${minSize}px)`;
  }, [image]);
  return (
    <StyledContentBlock>
      {imageAtEnd ? (
        <>
          {children}
          <StyledImageEnd css={{ width: imageSize }}>{image}</StyledImageEnd>
        </>
      ) : (
        <>
          {image}
          {children}
        </>
      )}
    </StyledContentBlock>
  );
}
