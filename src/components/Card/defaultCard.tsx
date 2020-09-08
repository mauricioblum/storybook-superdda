import React, { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { MailIcon, UserCheck, UserX, LockIcon } from '../Icons';
import { formatDate } from '../utils/formatDate';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardIcons,
  CardTitleContainer,
  CardTitle,
  Logo,
  DueDateText,
  CardText,
  CnpjText,
  CardValue,
  CurrencyText,
  ValueText,
  BetweenRow,
  PaidText,
  Shimmer,
  LockedText,
} from './styles';

import { CardProps } from '.';

export const DefaultCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  cardTitle,
  text,
  textColor,
  barColor,
  isDue,
  isDueText = 'Vencendo hoje',
  isPaid,
  isFromMail,
  isUserAdded,
  containerStyle,
  logo,
  imageWidth,
  imageHeight,
  isLocked,
}) => {
  const logoStyle = {
    width: imageWidth || 90,
    height: imageHeight || 30,
  };

  const formattedDate = useMemo(() => {
    return isDue ? `${isDueText}, ${formatDate(dueDate)}` : formatDate(dueDate);
  }, [dueDate, isDue, isDueText]);

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <CardTitleContainer>
            {isLocked ? (
              <LockIcon size={32} />
            ) : (
              logo && (
                <Logo
                  style={logoStyle}
                  source={{ uri: logo }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
              )
            )}
            {isLocked ? (
              <LockedText>Boleto protegido por senha</LockedText>
            ) : (
              <CardTitle>{cardTitle}</CardTitle>
            )}
          </CardTitleContainer>
          {isLocked ? (
            <Shimmer size="30px" />
          ) : (
            <DueDateText isDue={isDue ? 1 : 0}>{formattedDate}</DueDateText>
          )}
        </CardHeader>
        <CardBody>
          {isLocked ? (
            <>
              <BetweenRow>
                <Shimmer size="70px" />
              </BetweenRow>
              <Shimmer size="90px" />
            </>
          ) : (
            <>
              <BetweenRow>
                {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
                {isPaid === true && <PaidText>PAGO</PaidText>}
              </BetweenRow>
              <CardText style={{ color: textColor }}>{text}</CardText>
            </>
          )}
          {children}
        </CardBody>
        <CardFooter>
          {isLocked ? (
            <>
              <Shimmer />
              <Shimmer size="20px" />
            </>
          ) : (
            <>
              <CardIcons>
                {isFromMail && <MailIcon />}
                {isUserAdded ? <UserCheck /> : <UserX />}
              </CardIcons>
              <CardValue>
                <CurrencyText>R$</CurrencyText>
                <NumberFormat
                  value={value}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  renderText={(number) => <ValueText>{number}</ValueText>}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </CardValue>
            </>
          )}
        </CardFooter>
      </Content>
    </Container>
  );
};
