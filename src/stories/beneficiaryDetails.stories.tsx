import * as React from 'react';
import AppView from './AppView';
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
    value: 1289.55,
  },
];

export default {
  title: 'SuperDDA/BeneficiaryDetails',
  component: BeneficiaryDetails,
  decorators: [(Story) => <AppView><Story/></AppView>],
} as Meta;

const Template: Story<BeneficiaryDetailsProps> = (args) => <BeneficiaryDetails {...args} />;

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
      paymentHistory,
    },
};
