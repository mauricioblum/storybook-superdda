import * as React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Card, CardProps } from '../components/Card';
import { FeaturedCard, FeaturedCardType } from '../components/FeaturedCard';
import {
  BeneficiaryCard as BeneficiaryCardComponent,
  BeneficiaryCardProps,
} from '../components/BeneficiaryCard';

export default {
  title: 'SuperDDA/Cards',
  component: Card,
  argTypes: {
    dueDate: { control: 'date' },
    barColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;
const TemplateFeatured: Story<FeaturedCardType> = (args) => (
  <FeaturedCard {...args} />
);
const TemplateBeneficiary: Story<BeneficiaryCardProps> = (args) => (
  <BeneficiaryCardComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  barColor: '#ff9000',
  dueDate: new Date(),
  cnpj: '99.999.999.0001-99',
  cardTitle: 'CERJ',
  text: 'Hello Storybook',
  value: 500,
  isFromMail: true,
  isUserAdded: true,
};

export const NetflixCard = Template.bind({});
NetflixCard.args = {
  type: 'netflix',
  cnpj: '99.999.999.0001-99',
  text: 'Assinatura Netflix',
  dueDate: new Date(),
  isFromMail: true,
  isUserAdded: false,
  value: 50,
  isDue: false,
  isPaid: false,
};

export const LightBillCard = Template.bind({});
LightBillCard.args = {
  type: 'lightBill',
  cnpj: '99.999.999.0001-99',
  text: 'Cor da Bandeira',
  dueDate: new Date(),
  isFromMail: true,
  isUserAdded: false,
  value: 50,
  isDue: false,
  isPaid: false,
  lightBillFlagStatus: 'yellow',
};

export const CardFeatured = TemplateFeatured.bind({});
CardFeatured.storyName = 'Featured Card';
CardFeatured.argTypes = {
  featuredBgColor: { control: 'color' },
};
CardFeatured.args = {
  logo:
    'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-6.png',
  barColor: '#1dd15d',
  dueDate: new Date(),
  cnpj: '99.999.999.0001-99',
  cardTitle: 'CERJ',
  text: 'Hello Storybook',
  value: 500,
  isFromMail: true,
  isUserAdded: true,
  textColor: '#666',
  isDueText: 'Vencendo hoje',
  imageWidth: 77,
  imageHeight: 38,
};

export const BeneficiaryCard = TemplateBeneficiary.bind({});
BeneficiaryCard.args = {
  cnpj: '99.999.999.0001-99',
  cardTitle: 'CERJ',
  cardTextColor: '#727272',
  text: 'Pagamento automático no dia do vencimento',
  barColor: '#999',
  switchStyle: {
    backgroundActive: '#f9a06d',
    backgroundInactive: '#b3b3b3',
    circleActiveColor: '#f78733',
    circleInActiveColor: '#717171',
  },
  limitValue: 300,
  limitValueText: 'Valor Limite',
  logo:
    'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
  imageWidth: 30,
  imageHeight: 30,
  type: 'Account',
  isActive: true,
};
