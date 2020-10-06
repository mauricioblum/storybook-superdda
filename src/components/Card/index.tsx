import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  isLocked?: boolean;
  onClickCard?(): void;
  testID?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  switch (props.type) {
    case 'netflix':
      return (
        <TouchableOpacity
          testID="netflixCard"
          activeOpacity={0.9}
          onPress={props.onClickCard}
        >
          <NetflixCard {...props} />
        </TouchableOpacity>
      );
    case 'lightBill':
      return (
        <TouchableOpacity
          testID="lightBillCard"
          activeOpacity={0.9}
          onPress={props.onClickCard}
        >
          <LightBillCard {...props} />
        </TouchableOpacity>
      );
    case 'default':
      return (
        <TouchableOpacity
          testID="defaultCard"
          activeOpacity={0.9}
          onPress={props.onClickCard}
        >
          <DefaultCard {...props} />
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          testID="defaultCard"
          activeOpacity={0.9}
          onPress={props.onClickCard}
        >
          <DefaultCard {...props} />
        </TouchableOpacity>
      );
  }
};
