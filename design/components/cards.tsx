import { useLink } from '@react-aria/link';
import React, { useRef } from 'react';

import { RichText } from './rich-text';
import { styled } from './stitches.config';
import { Tag } from './tag';
import { Title } from './title';

const StyledStories = styled('a', {
  img: { height: 324, width: 406 },
  position: 'relative',
  outline: 'none',
});

const StyledCases = styled('a', {
  img: { height: 324, width: 406 },
  position: 'relative',
  outline: 'none',
});
const ContentContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: -40,
  left: 0,
  flexFlow: 'column nowrap',
  width: 376,
  backgroundColor: '#ffffff',
  main: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'space-between',
    margin: '$medium',
  },
});
export interface CardsProps {
  client?: string;
  href?: string;
  image: { url: string };
  intro?: string;
  tag: string;
  target: string;
  title: string;
  service?: string;
}
export function Cards({
  client,
  image,
  intro,
  tag,
  title,
  service,
  ...props
}: CardsProps): React.ReactElement {
  const reference = useRef<HTMLElement>(null);
  const { linkProps } = useLink(props as any, reference);
  const { target, href } = props;
  if (client != null && service != null) {
    return (
      <StyledCases href={href} target={target} {...linkProps}>
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
  const string = intro.slice(0, charLimits);
  return (
    <StyledStories href={href} target={target} {...linkProps}>
      <img alt="decorative" src={image.url} />
      <ContentContainer>
        <main>
          <Tag>{tag}</Tag>
          <Title as="h3" size={3}>
            {title}
          </Title>
          <RichText>{string}</RichText>
        </main>
      </ContentContainer>
    </StyledStories>
  );
}
