import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  MonthSelector, MonthSelectorProps
} from '../components/MonthSelector';

export default {
  title: 'SuperDDA/MonthSelector',
  component: MonthSelector,
} as Meta;

const Template: Story<MonthSelectorProps> = (args) => <MonthSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentMonth: 7,
  monthScrollCenterOffset: 400,
};
