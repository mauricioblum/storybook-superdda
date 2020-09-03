import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  AccountDetails,
  AccountDetailsProps,
} from '../components/AccountDetails';

const paymentHistory = [
  {
    date: '2020-01',
    value: 2589.99,
  },
  {
    date: '2020-02',
    value: 1330.45,
  },
  {
    date: '2020-03',
    value: 998.22,
  },
  {
    date: '2020-04',
    value: 1660.89,
  },
  {
    date: '2020-05',
    value: 1289.55,
  },
];

export default {
  title: 'SuperDDA/AccountDetails',
  component: AccountDetails,
} as Meta;

const Template: Story<AccountDetailsProps> = (args) => (
  <AccountDetails {...args} />
);

export const AutomaticDebit = Template.bind({});
AutomaticDebit.args = {
  chartDataText: 'JUNHO',
  chartDataValue: 'R$ 1.983,36',
  chartLegend: 'Resumo das Faturas Anteriores',
  chartWidth: 414,
  chartData: [
    {
      label: 'Dez',
      value: 1000,
    },
    {
      label: 'Jan',
      value: 1200,
    },
    {
      label: 'Fev',
      value: 950,
    },
    {
      label: 'Mar',
      value: 1050,
    },
    {
      label: 'Abr',
      value: 800,
    },
    {
      label: 'Mai',
      value: 970,
    },
    {
      label: 'Jun',
      value: 1300,
    },
  ],
  data: {
    companyLogo:
      'https://cdn2.downdetector.com/static/uploads/logo/Nubank_logo.png',
    companyName: 'Nu Pagamentos S.A.',
    cnpj: '18.236.120/0001-58',
    cardNumber: '5162 **** **** 9090',
    isAutomaticDebit: true,
    automaticDebitBankName: 'Banco Itaú',
    isFromIuPay: true,
    isUserAdded: false,
    authorizedLimit: false,
    autoPayment: false,
    cardHolderName: 'Roberto de Oliveira Santos',
    paymentHistory,
    billDetails: {
      barCode: '34191090654483012854014190680000183120000059475',
      billDate: '2020-06',
      dueDate: new Date('2020-06-19T23:00:00.000Z'),
      emissionDate: new Date('2020-06-06T23:00:00.000Z'),
      interestInstallmentFine: 22,
      interestInstallmentRate: 12,
      interestInstallmentRateCET: 15,
      interestRate: 14,
      interestRateCET: 385.17,
      minimumPaymentValue: 400,
      totalLimitValue: 1200,
      totalWithdrawLimitValue: 600,
      value: 1230.89,
    },
  },
};
AutomaticDebit.argTypes = {
  baseColor: { control: 'color' },
};

export const PaymentAccountDetails = Template.bind({});
PaymentAccountDetails.args = {
  chartDataText: 'JUNHO',
  chartDataValue: 'R$ 1.983,36',
  chartLegend: 'Resumo das Faturas Anteriores',
  chartWidth: 414,
  chartData: [
    {
      label: 'Dez',
      value: 1000,
    },
    {
      label: 'Jan',
      value: 1200,
    },
    {
      label: 'Fev',
      value: 950,
    },
    {
      label: 'Mar',
      value: 1050,
    },
    {
      label: 'Abr',
      value: 800,
    },
    {
      label: 'Mai',
      value: 970,
    },
    {
      label: 'Jun',
      value: 1300,
    },
  ],
  data: {
    companyLogo:
      'https://cdn2.downdetector.com/static/uploads/logo/Nubank_logo.png',
    companyName: 'Nu Pagamentos S.A.',
    cnpj: '18.236.120/0001-58',
    cardNumber: '5162 **** **** 9090',
    isAutomaticDebit: false,
    isFromIuPay: true,
    isUserAdded: false,
    authorizedLimit: false,
    autoPayment: false,
    cardHolderName: 'Roberto de Oliveira Santos',
    paymentHistory,
    billDetails: {
      barCode: '34191090654483012854014190680000183120000059475',
      billDate: '2020-06',
      dueDate: new Date('2020-06-19T23:00:00.000Z'),
      emissionDate: new Date('2020-06-06T23:00:00.000Z'),
      interestInstallmentFine: 22,
      interestInstallmentRate: 12,
      interestInstallmentRateCET: 15,
      interestRate: 14,
      interestRateCET: 385.17,
      minimumPaymentValue: 400,
      totalLimitValue: 1200,
      totalWithdrawLimitValue: 600,
      value: 1230.89,
    },
  },
};
PaymentAccountDetails.argTypes = {
  baseColor: { control: 'color' },
};
