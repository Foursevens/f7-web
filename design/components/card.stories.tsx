import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { RichText, Tag, Title } from '.';
import { CardProps, Card } from './card';
import { DUURZAAMHEID } from './data';

export default {
  title: '3. Organisms / Card',
  component: Card,
};

const Template: Story<CardProps> = (argumentz): React.ReactElement => (
  <div style={{ maxWidth: 500 }}>
    <Card {...argumentz} />
  </div>
);

export const WithWhite1 = Template.bind({});
WithWhite1.args = {
  background: '$white1',
  image: DUURZAAMHEID,
  children: (
    <>
      <Title size="sm">Eenvoudig fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </>
  ),
};

export const WithWhite2 = Template.bind({});
WithWhite2.args = {
  background: '$white2',
  image: DUURZAAMHEID,
  children: (
    <>
      <Title size="sm">Eenvoudig fietsparkeren</Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </>
  ),
};

export const WithLink = Template.bind({});
WithLink.args = {
  image: DUURZAAMHEID,
  children: (
    <>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <Tag>Theme</Tag>
      <RichText>
        {
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
        }
      </RichText>
    </>
  ),
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  image: DUURZAAMHEID,
  children: (
    <>
      <Title size="sm">
        <a href="/">Eenvoudig fietsparkeren</a>
      </Title>
      <Tag>Theme</Tag>
      <RichText>
        {`<p>Urna risus lorem hac aptent sociis ullamcorper rutrum tortor nascetur, id porttitor adipiscing vivamus dapibus purus ridiculus primis. Mollis cras per curabitur ornare mi ultricies, metus lacinia nulla nec condimentum vitae torquent, lectus platea mus rutrum montes. Quam id curae nam quisque curabitur etiam, dui facilisis sociis mollis inceptos porttitor vehicula, sit velit risus dictum potenti. Lacus fringilla tristique lobortis nulla curae dignissim curabitur blandit interdum augue purus, viverra pellentesque at dis auctor gravida ad ullamcorper turpis magna tincidunt enim, lorem sociis phasellus orci bibendum placerat semper nisl cum mauris. Metus sed odio sodales ipsum aliquet id, ultricies dictum torquent justo convallis quis, etiam class litora eu per.</p>

          <p>Urna proin lacus cras dolor tristique malesuada suscipit eget, dictumst mattis leo mollis sem aliquet hac, hendrerit ante fames rutrum duis nunc nullam. Viverra diam scelerisque libero odio blandit sit morbi velit ac, magna etiam in augue risus potenti ut enim proin sed, sociis mollis facilisis faucibus luctus nisl neque ultrices. Hendrerit sed nisl porttitor venenatis aliquam proin cras, at donec mus urna nascetur adipiscing, molestie auctor vehicula dapibus eu quam. Arcu magna rhoncus primis dapibus lobortis bibendum adipiscing, ac vivamus sodales curabitur quis suspendisse, scelerisque torquent eu sed enim per. Senectus elementum mi pretium faucibus pharetra aenean lacinia etiam, at ad nullam ornare montes metus neque, gravida vivamus consequat fringilla duis quis lorem. Vehicula lacinia libero scelerisque aptent lacus porttitor tempor nibh interdum feugiat suscipit, commodo mi fermentum inceptos duis praesent per dictumst id ac.</p>
          `}
      </RichText>
    </>
  ),
};
