import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCTextField from '../components/TextField'
import { RCButtonProps } from '../components/TextField'

export default {
  title: 'Example/Text Field',
  component: RCTextField,
} as Meta;

const Template: Story<RCButtonProps> = (args) => <RCTextField {...args} />;

export const TextBox = Template.bind({});
TextBox.args = {
  type: 'standard',
  helpText: 'Some Help Text'
};

export const Search = Template.bind({});
Search.args = {
  type: 'search'
};