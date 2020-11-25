import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { ButtonLink, RichText, Title } from '.';
import { ConversionBlock, ConversionBlockProps } from './conversion-block';

export default {
  title: '3. Organisms / Conversion Block',
  component: ConversionBlock,
};

const Template: Story<ConversionBlockProps> = (
  argumentz,
): React.ReactElement => <ConversionBlock {...argumentz} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Title fullStop={false} size="md">
        Klinkt als iets voor jou?
      </Title>
      <RichText size="lg">
        {`<p>
            <a href="mailto:info@foursevens.be">info@foursevens.be</a><br/>
            <a href="tel:+3234508030">+32 3 450 80 30</a>
          </p>`}
      </RichText>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </>
  ),
};

export const WithOnlyTitle = Template.bind({});
WithOnlyTitle.args = {
  children: (
    <Title fullStop={false} size="md">
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
      {`<p>
          <a href="mailto:info@foursevens.be">info@foursevens.be</a><br/>
          <a href="tel:+3234508030">+32 3 450 80 30</a>
        </p>`}
    </RichText>
  ),
};

export const WithNoText = Template.bind({});
WithNoText.args = {
  children: (
    <>
      <Title fullStop={false} size="md">
        Digitaal voor mens en planeet
      </Title>
      <ButtonLink background="secondary">Bekijk onze vacatures</ButtonLink>
    </>
  ),
};
