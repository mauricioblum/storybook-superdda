import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Card,
  CardProps
} from '../components/Card';

export default {
  title: 'SuperDDA/Cards',
  component: Card,
  argTypes: {
    dueDate: {control: 'date'},
    barColor: { control: 'color'},
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  barColor: '#ff9000',
  dueDate: new Date(),
  cnpj: '1231231232',
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
}

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
}

