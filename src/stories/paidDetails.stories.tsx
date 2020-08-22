import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { PaidDetails, PaidDetailsProps } from '../components/PaidDetails';

export default {
  title: 'SuperDDA/PaidDetails',
  component: PaidDetails,
} as Meta;

const Template: Story<PaidDetailsProps> = (args) => <PaidDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  beneficiaryName: 'COMPANHIA DE ELETRICIDADE DO RIO DE JANEIRO',
  paidDate: new Date(),
  screenTitle: 'CERJ',
  screenImage: 'https://i.imgur.com/WyzDPRP.png',
  value: 223.24,
  dueDate: new Date(),
  baseColor: '#f78c49',
  receiptAvailable: true,
};
Default.argTypes = {
  dueDate: { control: 'date' },
  paidDate: { control: 'date' },
  baseColor: { control: 'color' },
};
