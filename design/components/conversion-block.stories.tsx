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

export const withOnlyTitle = Template.bind({});
withOnlyTitle.args = {
  children: (
    <Title fullStop={false} size={2}>
      Klinkt als iets voor jou?
    </Title>
  ),
};
export const withOnlyButton = Template.bind({});
withOnlyButton.args = {
  children: (
    <div>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </div>
  ),
};

export const withOnlyText = Template.bind({});
withOnlyText.args = {
  children: (
    <div>
      <RichText>
        {
          '<p><a href="mailto:info@foursevens.be">info@foursevens.be</a> <br> <a href="tel:+3234508030">+32 3 450 80 30</a></p>'
        }
      </RichText>
    </div>
  ),
};

export const withText = Template.bind({});
withText.args = {
  children: (
    <>
      <Title fullStop={false} size={2}>
        Klinkt als iets voor jou?
      </Title>
      <RichText>
        {
          '<p><a href="mailto:info@foursevens.be">info@foursevens.be</a> <br> <a href="tel:+3234508030">+32 3 450 80 30</a></p>'
        }
      </RichText>
      <div>
        <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
      </div>
    </>
  ),
};

export const withNoText = Template.bind({});
withNoText.args = {
  children: (
    <>
      <Title fullStop={false} size={2}>
        Digitaal voor mens en planeet
      </Title>
      <div>
        <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
      </div>
    </>
  ),
};
