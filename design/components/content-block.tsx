import React from 'react';

import { styled } from './stitches.config';

const StyledContentBlock = styled('div', {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(12, 1fr)',
  alignItems: 'center',

  // Image at start
  '&> .content-block__image-wrapper:first-child': {
    gridColumn: '1 / 6',
  },
  '&> :not(.content-block__image-wrapper):not(:only-child):last-child': {
    gridColumn: '7 / 12',
  },

  // Image at end
  '&> :not(.content-block__image-wrapper):first-child': {
    gridColumn: '1 / 6',
  },
  '&> .content-block__image-wrapper:last-child': {
    gridColumn: '7 / 12',
    position: 'relative',
    width: 'min(var(--image-max-height), 40vw)',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '100%',
    },

    img: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundColor: '$primary2',
      boxShadow: '15px 15px 0 $primary2',
    },
  },
});

type Child = React.ReactElement | null | undefined;

export interface ContentBlockProps {
  children: Child | Child[];
}

export function ContentBlock({
  children,
}: ContentBlockProps): React.ReactElement {
  const childrenList = React.Children.toArray(children) as Child[];
  const imageIndex = childrenList.findIndex(
    (child) =>
      child != null &&
      typeof child.type === 'function' &&
      child.type.name !== 'TextBlock',
  );
  const imageElement =
    imageIndex === -1
      ? null
      : (childrenList[imageIndex] as React.ReactElement<
          React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
          >
        >);
  if (imageElement) {
    childrenList.splice(
      imageIndex,
      1,
      <div key="image-wrapper" className="content-block__image-wrapper">
        {imageElement}
      </div>,
    );
  }
  const imageMaxHeight = Math.min(
    Number(imageElement?.props.width),
    Number(imageElement?.props.height),
  );
  return (
    <StyledContentBlock css={{ '--image-max-height': `${imageMaxHeight}px` }}>
      {childrenList}
    </StyledContentBlock>
  );
}
