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
  type: 'Payment',
};
Default.argTypes = {
  dueDate: { control: 'date' },
  scheduledDueDate: { control: 'date' },
  baseColor: { control: 'color' },
};

export const WithButton = Template.bind({});
WithButton.args = {
  beneficiaryName: 'COMPANHIA DE ELETRICIDADE DO RIO DE JANEIRO',
  bankName: 'ITAÚ',
  payerName: 'ROBERTO DE OLIVEIRA SANTOS',
  barCode: '34191.09065 44830. 1285 40141.906 8 00001.83120.59475',
  value: 223.24,
  dueDate: '2020-11-15',
  baseColor: '#890090',
  type: 'Payment',
  confirmPaymentButtonText: 'Pagar no meu banco',
};

WithButton.argTypes = {
  baseColor: { control: 'color' },
};

export const WithButtonPaid = Template.bind({});
WithButtonPaid.args = {
  beneficiaryName: 'COMPANHIA DE ELETRICIDADE DO RIO DE JANEIRO',
  bankName: 'ITAÚ',
  payerName: 'ROBERTO DE OLIVEIRA SANTOS',
  barCode: '34191.09065 44830. 1285 40141.906 8 00001.83120.59475',
  value: 223.24,
  dueDate: '2020-11-15',
  baseColor: '#890090',
  type: 'Payment',
  confirmPaymentButtonText: 'Pagar no meu banco',
  isPaid: true,
};

WithButtonPaid.argTypes = {
  baseColor: { control: 'color' },
};
