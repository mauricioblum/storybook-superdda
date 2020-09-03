import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DefaultCard } from '../Card/defaultCard';
import { CardProps } from '../Card';

import { Container } from './styles';

export interface FeatureCardProps {
  featuredBgColor?: string;
  containerStyle?: object;
}

export type FeaturedCardType = FeatureCardProps & CardProps;

export const FeaturedCard: React.FC<FeaturedCardType> = (props) => {
  const { featuredBgColor, onClickCard, containerStyle } = props;

  return (
    <Container bgColor={featuredBgColor} style={containerStyle}>
      <TouchableOpacity activeOpacity={0.9} onPress={onClickCard}>
        <DefaultCard {...props} />
      </TouchableOpacity>
    </Container>
  );
};
