import React, { useMemo, useState, useEffect } from 'react';
import { Image } from 'react-native';
import NumberFormat from 'react-number-format';
import { format, isToday } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Bar,
  Content,
  CardRow,
  LogoSection,
  LogoWrapper,
  Logo,
  CardTitle,
  CardInfo,
  DueDateText,
  ValueText,
  PaidText,
} from './styles';

export interface CardListItemProps {
  dueDate: Date;
  isDueTodayText?: string;
  value: number;
  logo?: string;
  barColor?: string;
  isPaid?: boolean;
  cardTitle?: string;
  cardTitleColor?: string;
  onCardClick?: () => void;
}

export const CardListItem: React.FC<CardListItemProps> = ({
  barColor,
  dueDate,
  isDueTodayText = 'Vencendo hoje',
  value,
  isPaid,
  logo,
  cardTitle,
  cardTitleColor,
  onCardClick,
}) => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);

  const isDueToday = useMemo(() => {
    return isToday(dueDate);
  }, [dueDate]);

  const formattedDate = useMemo(() => {
    const weekDay = format(dueDate, "EEEE',' ", {
      locale: ptBR,
    });

    const dayOfMonth = format(dueDate, 'dd MMM', {
      locale: ptBR,
    });

    if (isDueToday) {
      return `${isDueTodayText}, ${dayOfMonth.toUpperCase()}`;
    }

    return (
      weekDay.charAt(0).toUpperCase() +
      weekDay.slice(1) +
      dayOfMonth.toUpperCase()
    );
  }, [dueDate, isDueToday, isDueTodayText]);

  useEffect(() => {
    if (logo) {
      Image.getSize(
        logo,
        (width, height) => {
          setLogoWidth(width);
          setLogoHeight(height);
        },
        () => null,
      );
    }
  }, [logo]);

  return (
    <Container onPress={onCardClick}>
      <Bar color={barColor} />
      <Content>
        <CardRow>
          <LogoSection>
            <LogoWrapper>
              <Logo
                style={{ width: logoWidth, height: logoHeight }}
                source={{ uri: logo }}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </LogoWrapper>
            {cardTitle && (
              <CardTitle color={cardTitleColor}>{cardTitle}</CardTitle>
            )}
          </LogoSection>

          <CardInfo>
            <DueDateText isDue={isDueToday}>{formattedDate}</DueDateText>
            {isPaid === true && <PaidText>PAGO</PaidText>}
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ValueText>R$ {number}</ValueText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardInfo>
        </CardRow>
      </Content>
    </Container>
  );
};
