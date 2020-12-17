import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCMenu from '../components/Menu'
import { RCCompProps } from '../components/Menu'
import menuItemsData from '../data/menu'

export default {
  title: 'Example/Menu',
  component: RCMenu,
} as Meta;

const Template: Story<RCCompProps> = (args) => <RCMenu {...args} />;

export const MainMenu = Template.bind({});
MainMenu.args = {
  selectedTabIndex: 0,
  menuItemsData: menuItemsData
};
