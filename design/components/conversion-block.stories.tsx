import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink } from './button-link';
import { ConvertionBlock, ConversionBlockProps } from './conversion-block';
import { RichText } from './rich-text';
import { Title } from './title';

export default {
  title: '3. Organisms / ConversionBlock',
  component: ConvertionBlock,
};

const Template: Story<ConversionBlockProps> = (args): React.ReactElement => (
  <ConvertionBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Title fullStop={false} size={2}>
        Klinkt als iets voor jou?
      </Title>
      <RichText size="lg">
        {
          '<p><a href="mailto:info@foursevens.be">info@foursevens.be</a> <br> <a href="tel:+3234508030">+32 3 450 80 30</a></p>'
        }
      </RichText>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </>
  ),
};

export const WithOnlyTitle = Template.bind({});
WithOnlyTitle.args = {
  children: (
    <Title fullStop={false} size={2}>
      Klinkt als iets voor jou?
    </Title>
  ),
};

export const WithOnlyButton = Template.bind({});
WithOnlyButton.args = {
  children: (
    <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
  ),
};

export const WithOnlyText = Template.bind({});
WithOnlyText.args = {
  children: (
    <RichText size="lg">
      {
        '<p><a href="mailto:info@foursevens.be">info@foursevens.be</a> <br> <a href="tel:+3234508030">+32 3 450 80 30</a></p>'
      }
    </RichText>
  ),
};

export const WithNoText = Template.bind({});
WithNoText.args = {
  children: (
    <>
      <Title fullStop={false} size={2}>
        Digitaal voor mens en planeet
      </Title>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </>
  ),
};
