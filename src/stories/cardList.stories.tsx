import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CardList, CardListProps
} from '../components/CardList';

export default {
  title: 'SuperDDA/CardList',
  component: CardList,
} as Meta;

const Template: Story<CardListProps> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      barColor: '#00529a',
      dueDate: new Date('2020-08-15T15:01:56.328Z'),
      isPaid: false,
      logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/93/Embasa.png/1200px-Embasa.png',
      onCardClick: () => {},
      value: 90.12
    },
    {
      barColor: '#0d56f3',
      dueDate: new Date('2020-07-28T23:00:00.000Z'),
      isPaid: false,
      logo: 'https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-2.png',
      value: 2550
    },
    {
      barColor: '#e30613',
      dueDate: new Date('2020-08-04T23:00:00.000Z'),
      isPaid: false,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Novo_renner.png',
      value: 812.99
    },
    {
      barColor: '#999999',
      cardTitle: 'ARNALDO PESSOA LEAL',
      dueDate: new Date('2020-08-04T23:00:00.000Z'),
      isPaid: false,
      logo: 'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
      value: 11000
    }
  ],
  featured: true,
  featuredBackgroundColor: "#f78c49",
  showTotal: true,
  totalPaymentText: "Valor total dos pagamentos que vencem hoje",
  totalPaymentTextStyle: {textAlign: 'center'},
};
