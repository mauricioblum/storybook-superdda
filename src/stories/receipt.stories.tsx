import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Receipt, ReceiptProps } from '../components/Receipt';

export default {
  title: 'SuperDDA/Receipt',
  component: Receipt,
} as Meta;

const Template: Story<ReceiptProps> = (args) => <Receipt {...args} />;

export const Default = Template.bind({});
Default.args = {
  cedentName: 'COMPANHIA DE ELETRICIDADE DO RIO DE JANEIRO',
  cnpj: '15.139.629/0001-99',
  payerName: 'ROBERTO DE OLIVEIRA SANTOS',
  barCode: '34191.09065 44830. 1285 40141.906 8 00001.83120.59475',
  dueDate: new Date(),
  paidDate: new Date(),
  value: 223.24,
  discount: 0,
  interest: 0,
  fine: 0,
  chargedValue: 223.24,
  authenticationCode: 'A.6DE.DF4.75E.DBB,128',
  baseColor: '#f78c49',
};
Default.argTypes = {
  dueDate: { control: 'date' },
  paidDate: { control: 'date' },
  baseColor: { control: 'color' },
};
