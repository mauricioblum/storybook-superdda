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
  UnPaidText,
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
                  testID="cardLogo"
                  style={logoStyle}
                  source={{ uri: logo }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
              )
            )}
            {isLocked ? (
              <LockedText testID="lockedText">
                Boleto protegido por senha
              </LockedText>
            ) : (
              <CardTitle>{cardTitle}</CardTitle>
            )}
          </CardTitleContainer>
          {isLocked ? (
            <Shimmer testID="shimmer" size="30px" />
          ) : (
            <DueDateText accessibilityLabel="dueDate" isDue={isDue ? 1 : 0}>
              {formattedDate}
            </DueDateText>
          )}
        </CardHeader>
        <CardBody>
          {isLocked ? (
            <>
              <BetweenRow>
                <Shimmer testID="shimmer" size="70px" />
              </BetweenRow>
              <Shimmer testID="shimmer" size="90px" />
            </>
          ) : (
            <>
              <BetweenRow>
                {cnpj && <CnpjText testID="cnpj">CNPJ: {cnpj}</CnpjText>}
                {isPaid === true ? (
                  <PaidText testID="paid">PAGO</PaidText>
                ) : (
                  <UnPaidText>NÃO PAGO</UnPaidText>
                )}
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
