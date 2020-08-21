import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { View } from 'react-native';
import { Tabs } from '../components/Tabs';
import { MonthSelector } from '../components/MonthSelector';
import { Card } from '../components/Card';
import { CardList } from '../components/CardList';

export default {
  title: 'Examples',
} as Meta;

const cards = [
  {
    barColor: '#00529a',
    dueDate: new Date('2020-08-15T15:01:56.328Z'),
    isPaid: false,
    logo:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/9/93/Embasa.png/1200px-Embasa.png',
    onCardClick: () => {},
    value: 90.12,
  },
  {
    barColor: '#0d56f3',
    dueDate: new Date('2020-07-28T23:00:00.000Z'),
    isPaid: false,
    logo: 'https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-2.png',
    value: 2550,
  },
  {
    barColor: '#e30613',
    dueDate: new Date('2020-08-04T23:00:00.000Z'),
    isPaid: false,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Novo_renner.png',
    value: 812.99,
  },
  {
    barColor: '#999999',
    cardTitle: 'ARNALDO PESSOA LEAL',
    dueDate: new Date('2020-08-04T23:00:00.000Z'),
    isPaid: false,
    logo:
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    value: 11000,
  },
];

const tabs = [
  {
    order: 0,
    title: 'Pagamentos',
  },
  {
    order: 1,
    title: 'Beneficiários',
  },
  {
    order: 2,
    title: 'Recusados',
  },
];

export const Default = () => {
  return (
    <View>
      <Tabs tabs={tabs} />
      <MonthSelector currentMonth={7} />
      <View style={{ marginTop: 23, paddingHorizontal: 16 }}>
        <Card
          type="lightBill"
          cardTitle="CERJ"
          cnpj="99.999.999.0001-99"
          dueDate={new Date()}
          isFromMail
          isUserAdded
          value={500}
          isDue={false}
          isPaid={false}
          lightBillFlagStatus="yellow"
        />
        <View style={{ marginTop: 1 }} />
        <CardList cards={cards} />
      </View>
    </View>
  );
};
