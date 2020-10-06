import React from 'react';

import { RichText } from './rich-text';
import { styled } from './stitches.config';
import { Tag } from './tag';
import { Title } from './title';

const StyledStories = styled('div', {
  img: { height: 324, width: 406 },
  ':last-child': { textAlign: 'left' },
});

const StyledCases = styled('div', {
  img: { height: 324, width: 406 },
  ':last-child': { textAlign: 'left' },
});
const contentContainer = styled('section', {
  display: 'flex',
  flexFlow: 'column nowrap',
  marginBottom: '$large',
  width: 376,
  height: 111,
  backgroundColor: '#ffffff',
});
export interface CardsProps {
  clint?: string;
  cta?: { href: string; target?: string; text: string };
  image: { url: string };
  intro?: string;
  tag: string;
  target: string;
  title: string;
  service?: string;
}
export function Cards({
  clint,
  cta,
  image,
  intro,
  tag,
  target,
  title,
  service,
}: CardsProps): React.ReactElement {
  const sides = [];
  if (clint != null || service != null) {
    sides.push(
      <StyledCases>
        <img alt="decorative" src={image.url} />
        <header>
          <Tag>{tag}</Tag>
          <Title as="h3" size={2}>
            {title}
          </Title>
        </header>
        <RichText>{service}</RichText>
      </StyledCases>,
    );
  } else {
    sides.push(
      <StyledStories>
        <img alt="decorative" src={image.url} />
        <header>
          <Tag>{tag}</Tag>
          <Title as="h3" size={2}>
            {title}
          </Title>
        </header>
        <RichText>{intro}</RichText>
      </StyledStories>,
    );
  }
  return <contentContainer>{sides}</contentContainer>;
}
