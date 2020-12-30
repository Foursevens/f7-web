import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, ContentBlock, RichText, Tag, TextBlock, Title } from '.';
import { Container, ContainerProps } from './container';
import { DUURZAAMHEID, RICH_TEXT } from './data';

export default {
  title: '2. Molecules / Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<ContainerProps> = ({
  children,
  ...rest
}): React.ReactElement => <Container {...rest}>{children}</Container>;

export const White1 = Template.bind({});
White1.args = {
  background: 'white1',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const White2 = Template.bind({});
White2.args = {
  background: 'white2',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const Primary2 = Template.bind({});
Primary2.args = {
  background: 'primary2',
  children: <RichText>{RICH_TEXT}</RichText>,
};

export const WithSpacing = Template.bind({});
WithSpacing.args = {
  background: 'white2',
  children: <RichText>{RICH_TEXT}</RichText>,
  padding: true,
};

export const WithContentBlock = Template.bind({});
WithContentBlock.args = {
  background: 'white2',
  children: (
    <ContentBlock>
      {DUURZAAMHEID}
      <TextBlock>
        <Title size="md">Lorem Ipsum</Title>
        <Tag>Lorem Ipsum is simply dummy text</Tag>
        <RichText>{RICH_TEXT}</RichText>
        <div>
          <ButtonLink design="secondary">Go on</ButtonLink>
        </div>
      </TextBlock>
    </ContentBlock>
  ),
  padding: true,
};
