import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCLabel from './Label'
import { RCCompProps } from './Label'

export default {
  title: 'Label',
  component: RCLabel,
} as Meta;

const Template: Story<RCCompProps> = (args) => <RCLabel {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning',
  style: 'warning'
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success',
  style: 'success'
};

export const Info = Template.bind({});
Info.args = {
  text: 'Informative',
  style: 'info'
};

export const Default = Template.bind({});
Default.args = {
  text: 'Default'
};