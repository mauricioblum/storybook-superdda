import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  FilterSearch, FilterSearchProps
} from '../components/FilterSearch';

export default {
  title: 'SuperDDA/FilterSearches',
  component: FilterSearch,
} as Meta;

const Template: Story<FilterSearchProps> = (args) => <FilterSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  orderText: "Ordernar por",
};
