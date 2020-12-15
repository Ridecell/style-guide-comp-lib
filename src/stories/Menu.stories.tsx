import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RCMenu from '../components/Menu'
import { RCCompProps } from '../components/Menu'

import Dashboard from '@material-ui/icons/Dashboard';
import DataUsage from '@material-ui/icons/DataUsage';

export default {
  title: 'Example/Menu',
  component: RCMenu,
} as Meta;

const Template: Story<RCCompProps> = (args) => <RCMenu {...args} />;

export const MainMenu = Template.bind({});
MainMenu.args = {
  selectedTabIndex: 0,
  menuItemsData: [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <Dashboard />,
    },
    {
      id: "activity",
      name: "Activity",
      icon: <DataUsage />,
      tabMenuItems: [
        {
          isHeading: true,
          id: "jobs",
          name: "Jobs",
        },
        {
          isHeading: false,
          isDisabled: false,
          id: "activejobs",
          name: "Active Jobs",
          route: "https://material-ui.com/components/menus/",
          addItemRoute: "https://material-ui.com/components/material-icons/"
        },
        {
          isHeading: false,
          isDisabled: true,
          id: "pastjobs",
          name: "Past Jobs",
        }
      ]
    }
  ]
};
