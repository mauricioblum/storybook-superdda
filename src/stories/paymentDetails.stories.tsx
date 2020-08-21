import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  PaymentDetails,
  PaymentDetailsProps,
} from '../components/PaymentDetails';

export default {
  title: 'SuperDDA/PaymentDetails',
  component: PaymentDetails,
} as Meta;

const Template: Story<PaymentDetailsProps> = (args) => (
  <PaymentDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beneficiaryName: 'COMPANHIA DE ELETRICIDADE DO RIO DE JANEIRO',
  bankName: 'ITAÚ',
  payerName: 'ROBERTO DE OLIVEIRA SANTOS',
  barCode: '34191.09065 44830. 1285 40141.906 8 00001.83120.59475',
  value: 223.24,
  currentBalance: 3250,
  payWithType: 'My Banking',
  dueDate: new Date(),
  scheduledDueDate: new Date(),
  baseColor: '#f78c49',
};
Default.argTypes = {
  dueDate: { control: 'date' },
  scheduledDueDate: { control: 'date' },
  baseColor: { control: 'color' },
};
