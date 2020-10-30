import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  BeneficiaryDetails,
  BeneficiaryDetailsProps,
} from '../components/BeneficiaryDetails';

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
    value: 1174.13,
  },
  {
    date: '2020-06',
    value: 1289.55,
    isOpen: true,
  },
];

export default {
  title: 'SuperDDA/BeneficiaryDetails',
  component: BeneficiaryDetails,
} as Meta;

const Template: Story<BeneficiaryDetailsProps> = (args) => (
  <BeneficiaryDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  historyReverse: true,
  data: {
    companyLogo:
      'https://cdn2.downdetector.com/static/uploads/logo/Nubank_logo.png',
    companyName: 'Nu Pagamentos S.A.',
    cnpj: '18.236.120/0001-58',
    cardNumber: '5162 **** **** 9090',
    isFromIuPay: true,
    isUserAdded: false,
    authorizedLimit: false,
    autoPayment: false,
    cardHolderName: 'Roberto de Oliveira Santos',
    cardHolderAddress: 'Avenida Sete de Setembro 32/1101 Icaraí - Niterói - RJ',
    paymentHistory,
    beneficiaryDetails: {
      interestInstallmentFine: 22,
      interestInstallmentRate: 12,
      interestInstallmentRateCET: 15,
      interestRate: 14,
      interestRateCET: 385.17,
    },
  },
};
Default.argTypes = {
  baseColor: { control: 'color' },
};

export const Simple = Template.bind({});
Simple.args = {
  historyReverse: true,
  cardHolderOpenText: 'Acessar conta',
  showCardHolderNameOnModal: false,
  data: {
    companyLogo:
      'https://cdn2.downdetector.com/static/uploads/logo/Nubank_logo.png',
    companyName: 'Nu Pagamentos S.A.',
    cnpj: '18.236.120/0001-58',
    isFromIuPay: true,
    isFromMail: true,
    isUserAdded: false,
    cardHolderName: 'Roberto de Oliveira Santos',
    beneficiaryDetails: {},
  },
};
Simple.argTypes = {
  baseColor: { control: 'color' },
};
