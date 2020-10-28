import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { TextBlock } from '.';
import { CaseDetails } from './case-details';

export default {
  title: '1. Atoms / Case Details',
  component: CaseDetails,
};

const Template: Story = (argumentz): React.ReactElement => (
  <CaseDetails {...argumentz} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <TextBlock>
      <p>
        <strong>Klant</strong> Cycloparking VZW
      </p>
      <p>
        <a href="https://cycloparking.org/">Bezoek de website</a>
      </p>
    </TextBlock>
  ),
};
