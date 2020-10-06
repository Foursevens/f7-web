import React from 'react';

import { RichText } from './rich-text';
import { styled } from './stitches.config';
import { Tag } from './tag';
import { Title } from './title';

const StyledStories = styled('div', {
  img: { height: 324, width: 406 },
  position: 'relative',
  ':last-child': { textAlign: 'left' },
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '$large',
  },
});

const StyledCases = styled('div', {
  img: { height: 324, width: 406 },
  position: 'relative',
  ':last-child': { textAlign: 'left' },
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: '$large',
    RichText: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});
const ContentContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: 268,
  left: 0,
  flexFlow: 'column nowrap',
  width: 376,
  backgroundColor: '#ffffff',
});
export interface CardsProps {
  client?: string;
  cta?: { href: string; target?: string; text: string };
  image: { url: string };
  intro?: string;
  tag: string;
  target: string;
  title: string;
  service?: string;
}
export function Cards({
  client,
  cta,
  image,
  intro,
  tag,
  target,
  title,
  service,
}: CardsProps): React.ReactElement {
  if (client != null || service != null) {
    return (
      <StyledCases>
        <img alt="decorative" src={image.url} />
        <ContentContainer>
          <main>
            <Tag>{client}</Tag>
            <Title as="h3" size={3}>
              {title}
            </Title>
            <RichText>{service}</RichText>
          </main>
        </ContentContainer>
      </StyledCases>
    );
  }
  const charLimits = 100;
  const st = intro.slice(0, charLimits);
  return (
    <StyledStories>
      <img alt="decorative" src={image.url} />
      <ContentContainer>
        <main>
          <Tag>{tag}</Tag>
          <Title as="h3" size={3}>
            {title}
          </Title>
          <RichText>{st}</RichText>
        </main>
      </ContentContainer>
    </StyledStories>
  );
}
