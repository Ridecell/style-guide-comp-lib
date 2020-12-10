import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCButton from './Button'
import { RCButtonProps } from './Button'

export default {
  title: 'Example/RCButton',
  component: RCButton,
} as Meta;

const Template: Story<RCButtonProps> = (args) => <RCButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button'
};