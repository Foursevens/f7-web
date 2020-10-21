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
    <RichText>
      {
        '<p><a href="mailto:info@foursevens.be">info@foursevens.be</a> <br> <a href="tel:+3234508030">+32 3 450 80 30</a></p>'
      }
    </RichText>
  ),
};

export const WithText = Template.bind({});
WithText.args = {
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

export const WithNoText = Template.bind({});
WithNoText.args = {
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
