import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText } from '.';
import { ContainerStack, ContainerStackProps } from './container-stack';

export default {
  title: '2. Molecules / Container Stack',
  component: ContainerStack,
};

const Template: Story<ContainerStackProps> = (
  argumentz,
): React.ReactElement => <ContainerStack {...argumentz} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <RichText key={1}>
      {
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
      }
    </RichText>,
    <RichText key={2}>
      {
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
      }
    </RichText>,
  ],
  padding: true,
};
