import * as React from 'react';
import AppView from './AppView';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Tabs,
  TabsProps
} from '../components/Tabs';



export default {
  title: 'SuperDDA/Tabs',
  component: Tabs,
  decorators: [(Story) => <AppView><Story/></AppView>],
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      order: 0,
      title: 'Pagamentos',
    },
    {
      order: 1,
      title: 'Beneficiários',
    },
    {
      order: 2,
      title: 'Recusados',
    }
  ]
};
