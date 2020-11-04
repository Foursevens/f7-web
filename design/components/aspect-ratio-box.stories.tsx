import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { AspectRatioBox, AspectRatioBoxProps } from './aspect-ratio-box';

export default {
  title: '1. Atoms / Aspect Ratio Box',
  component: AspectRatioBox,
};

const Template: Story<AspectRatioBoxProps> = (
  argumentz,
): React.ReactElement => (
  <>
    <AspectRatioBox
      css={{ width: 100, backgroundColor: 'red' }}
      {...argumentz}
    />
    <AspectRatioBox
      css={{ width: 200, backgroundColor: 'green' }}
      {...argumentz}
    />
    <AspectRatioBox
      css={{ width: 500, backgroundColor: 'blue' }}
      {...argumentz}
    />
  </>
);

export const AspectRatioDot5 = Template.bind({});
AspectRatioDot5.args = { aspectRatio: 0.5 };

export const AspectRatio1 = Template.bind({});
AspectRatio1.args = { aspectRatio: 1 };

export const AspectRatio2 = Template.bind({});
AspectRatio2.args = { aspectRatio: 2 };
