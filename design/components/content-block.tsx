import React, { useMemo } from 'react';

import { AspectRatioBox } from './aspect-ratio-box';
import { styled } from './stitches.config';
import { TextBlockProps } from './text-block';
import { ReactHtmlImageElement } from './types';

const IMAGE_END_MAX_SIZE = 400;

const StyledContentBlock = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(12, 1fr)',
  alignItems: 'center',

  '&> :first-child': { gridColumn: '1 / 6' },
  '&> :last-child:not(:only-child)': { gridColumn: '7 / 12' },
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
  const imageSize = useMemo((): number => {
    if (image == null) {
      return 0;
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
      return 0;
    }
    return Math.min(
      IMAGE_END_MAX_SIZE,
      Number(props.width),
      Number(props.height),
    );
  }, [image]);
  return (
    <StyledContentBlock>
      {imageAtEnd ? (
        <>
          {children}
          <StyledImageEnd css={{ width: imageSize, height: imageSize }}>
            {image}
          </StyledImageEnd>
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
