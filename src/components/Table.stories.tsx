import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCTable from './Table'
import { RCCompProps } from './Table'

export default {
  title: 'Table',
  component: RCTable,
} as Meta;

const Template: Story<RCCompProps> = (args) => <RCTable {...args} />;

export const Table = Template.bind({});
Table.args = {
  title: 'Table Experiment'
};