import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { NetflixCard } from './netflixCard';
import { LightBillCard } from './lightBillCard';
import { DefaultCard } from './defaultCard';

export type CardType = 'netflix' | 'nubank' | 'lightBill' | 'default';

export interface CardProps {
  type?: CardType;
  logo?: string | null;
  value?: number;
  dueDate?: Date;
  cnpj?: string;
  cardTitle?: string;
  text?: string | JSX.Element;
  textColor?: string;
  barColor?: string;
  isDue?: boolean;
  isDueText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  isPaid?: boolean;
  isFromMail?: boolean;
  isUserAdded?: boolean;
  lightBillFlagStatus?: 'green' | 'yellow' | 'red';
  imageWidth?: number;
  imageHeight?: number;
}

export const Card: React.FC<CardProps> = (props) => {
  switch (props.type) {
    case 'netflix':
      return <NetflixCard {...props} />;
    case 'lightBill':
      return <LightBillCard {...props} />;
    case 'default':
      return <DefaultCard {...props} />;
    default:
      return <DefaultCard {...props} />;
  }
};
