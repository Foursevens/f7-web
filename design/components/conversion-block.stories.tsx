import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink } from './button-link';
import { ConversationBlock, ConversionBlockProps } from './conversion-block';
import { RichText } from './rich-text';
import { Title } from './title';

export default {
  title: '3. Organisms / ConversationBlock',
  component: ConversationBlock,
};

const Template: Story<ConversionBlockProps> = (args): React.ReactElement => (
  <ConversationBlock {...args} />
);

export const withText = Template.bind({});
withText.args = {
  children: [
    <Title as="h2" size={2}>
      Digitaal voor mens en planeet
    </Title>,
    <RichText>
      {'<p>Sustainable digital solutions with positive.</p>'}
    </RichText>,
    <div>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </div>,
  ],
};

export const noText = Template.bind({});
noText.args = {
  children: [
    <Title as="h2" size={2}>
      Digitaal voor mens en planeet
    </Title>,
    <div>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </div>,
  ],
};
