import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
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
  UnPaidText,
  LockedContainer,
  Shimmer,
} from './styles';
import { LockIcon } from '../Icons';

export interface CardListItemProps {
  dueDate?: Date | string;
  isDueTodayText?: string;
  value?: number;
  logo?: string;
  barColor?: string;
  isPaid?: boolean;
  cardTitle?: string;
  cardTitleColor?: string;
  onCardClick?: () => void;
  isLocked?: boolean;
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
  isLocked,
}) => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);
  const logoRef = useRef<Image>(null);

  const renderCardTitle = useCallback(
    (
      cardTitleColor: string | undefined,
      cardTitle: string | undefined,
      isLocked?: boolean,
    ) => {
      if (isLocked) {
        return (
          <CardTitle
            numberOfLines={1}
            color="#e50914"
            style={{ marginLeft: -15 }}
          >
            Boleto protegido por senha
          </CardTitle>
        );
      } else if (cardTitle) {
        return <CardTitle color={cardTitleColor}>{cardTitle}</CardTitle>;
      }
      return null;
    },
    [],
  );

  const realDate = useMemo(() => {
    return typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
  }, [dueDate]);

  const isDueToday = useMemo(() => {
    return realDate && isToday(realDate);
  }, [realDate]);

  const formattedDate = useMemo(() => {
    if (realDate) {
      const weekDay = format(realDate, "EEEE',' ", {
        locale: ptBR,
      });

      const dayOfMonth = format(realDate, 'dd MMM', {
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
    }
    return null;
  }, [realDate, isDueToday, isDueTodayText]);

  const getImageSize = useCallback(async (logo): Promise<{
    width: number;
    height: number;
  }> => {
    return new Promise((resolve, reject) => {
      Image.getSize(
        logo,
        (width, height) => {
          resolve({ width, height });
        },
        (error) => reject({ error }),
      );
    });
  }, []);

  useEffect(() => {
    async function getLogoImageDimensions() {
      if (logo && logoRef.current) {
        const dimensions = await getImageSize(logo);
        if (dimensions.width) {
          setLogoWidth(dimensions.width);
          setLogoHeight(dimensions.height);
        }
      }
    }

    getLogoImageDimensions();
  }, [logo, getImageSize]);

  return (
    <Container onPress={onCardClick}>
      <Bar color={barColor} />
      <Content>
        <CardRow>
          <LogoSection>
            <LogoWrapper>
              {isLocked ? (
                <LockIcon size={32} />
              ) : (
                <Logo
                  ref={logoRef}
                  style={{ width: logoWidth, height: logoHeight }}
                  source={{ uri: logo }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
              )}
            </LogoWrapper>
            {renderCardTitle(cardTitleColor, cardTitle, isLocked)}
          </LogoSection>

          <CardInfo>
            {isLocked ? (
              <LockedContainer>
                <Shimmer style={{ marginBottom: 4 }} />
                <Shimmer size="30px" style={{ marginBottom: 4 }} />
                <Shimmer size="60px" />
              </LockedContainer>
            ) : (
              <>
                <DueDateText isDue={isDueToday}>{formattedDate}</DueDateText>
                {isPaid === true ? (
                  <PaidText>PAGO</PaidText>
                ) : (
                  <UnPaidText>NÃO PAGO</UnPaidText>
                )}
                <NumberFormat
                  value={value}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  renderText={(number) => <ValueText>R$ {number}</ValueText>}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </>
            )}
          </CardInfo>
        </CardRow>
      </Content>
    </Container>
  );
};
