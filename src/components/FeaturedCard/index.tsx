import React from 'react';
import { DefaultCard } from '../Card/defaultCard';
import { CardProps } from '../Card';

import { Container } from './styles';

export interface FeatureCardProps {
  featuredBgColor?: string;
}

export type FeaturedCardType = FeatureCardProps & CardProps;

export const FeaturedCard: React.FC<FeaturedCardType> = (props) => {
  const { featuredBgColor } = props;

  return (
    <Container bgColor={featuredBgColor}>
      <DefaultCard {...props} />
    </Container>
  );
};
