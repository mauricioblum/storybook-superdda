import React from 'react';
import { DefaultCard } from '../Card/defaultCard';
import type { CardProps } from '../Card';

import { Container } from './styles';

export interface FeatureCardProps {
  featuredBgColor?: string;
}

export const FeaturedCard: React.FC<FeatureCardProps & CardProps> = (props) => {
  const { featuredBgColor } = props;

  return (
    <Container bgColor={featuredBgColor}>
      <DefaultCard {...props} />
    </Container>
  );
};
