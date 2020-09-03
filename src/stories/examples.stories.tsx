import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { View, Text, StyleProp, TextStyle } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { Tabs } from '../components/Tabs';
import { MonthSelector } from '../components/MonthSelector';
import { CardList } from '../components/CardList';
import { FeaturedCard } from '../components/FeaturedCard';

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
];

const cardsRecent = [
  {
    barColor: '#f7e000',
    dueDate: new Date('2020-07-09T23:00:00.000Z'),
    isPaid: false,
    logo: 'https://i.imgur.com/2h3lh4e.png',
    value: 200,
  },
  {
    barColor: '#999999',
    cardTitle: 'ARNALDO PESSOA LEAL',
    dueDate: new Date('2020-08-04T23:00:00.000Z'),
    isPaid: false,
    logo: 'https://i.imgur.com/SpFKoZr.png',
    value: 11000,
  },
];

const otherCards = [
  {
    barColor: '#8e05c2',
    dueDate: new Date('2020-07-01T23:00:00.000Z'),
    isPaid: false,
    logo: 'https://i.imgur.com/vE3CxZt.png',
    value: 1230,
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
      <AppHeader title="Meus pagamentos" />
      <Tabs tabs={tabs} />
      <MonthSelector currentMonth={7} />
      <FeaturedCard
        text="Tipo de Plano: Premium ULTRA HD"
        logo="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        textColor="#727272"
        cnpj="99.999.999.0001-99"
        dueDate={new Date()}
        isFromMail
        isUserAdded
        value={223.24}
        isDue={true}
        isPaid={false}
      />
      <View style={{ marginTop: 9, paddingHorizontal: 16, paddingBottom: 16 }}>
        <Text style={textStyleLabel}>Vencendo em até 7 dias</Text>
        <View style={{ marginTop: 1 }} />
        <CardList cards={cards} />
        <Text style={textStyleDescription}>
          Você tem 4 pagamentos vencendo em até
          <Text style={textStyleLabel}>7 dias</Text>, no valor total de
          <Text style={textStyleLabel}>R$ 4.093,12</Text>
        </Text>
        <View style={{ marginTop: 5 }} />
        <Text style={textStyleLabel}>Emitidos recentemente</Text>
        <CardList cards={cardsRecent} />
        <View style={{ marginTop: 25 }} />
        <Text style={textStyleLabel}>Outros pagamentos</Text>
        <CardList cards={otherCards} />
      </View>
    </View>
  );
};

const textStyleLabel: StyleProp<TextStyle> = {
  fontFamily: 'NunitoSans-Bold',
  fontSize: 14,
  lineHeight: 17,
  color: '#707070',
  marginBottom: 9,
  paddingLeft: 6,
};

const textStyleDescription: StyleProp<TextStyle> = {
  fontFamily: 'NunitoSans-Regular',
  fontSize: 14,
  lineHeight: 17,
  color: '#707070',
  marginTop: 20,
  textAlign: 'center',
  marginBottom: 9,
  paddingLeft: 6,
};
