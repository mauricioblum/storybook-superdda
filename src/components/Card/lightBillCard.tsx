import React, { useCallback, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components/native';
import { MailIcon, UserCheck, UserX, LightBulb } from '../Icons';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardIcons,
  DueDateText,
  BetweenRow,
  CnpjText,
  PaidText,
  UnPaidText,
  CardValue,
  CurrencyText,
  ValueText,
} from './styles';

import { CardProps } from '.';
import { formatDate } from '../utils/formatDate';

const FlagText = styled.Text<{ color: string }>`
  font-family: 'NunitoSans-Bold';
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${(props): string => props.color};
`;

export const LightBillCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  text,
  barColor,
  isDue,
  isDueText = 'Vencendo hoje',
  containerStyle,
  lightBillFlagStatus,
  isPaid,
  isFromMail,
  isUserAdded,
}) => {
  const getFlagColor = useCallback((): string => {
    if (lightBillFlagStatus === 'green') {
      return '#8aa626';
    }
    if (lightBillFlagStatus === 'yellow') {
      return '#ebbf10';
    }
    return '#e30613';
  }, [lightBillFlagStatus]);

  const formattedDate = useMemo(() => {
    const realDate = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;

    return isDue
      ? `${isDueText}, ${formatDate(realDate)}`
      : formatDate(realDate);
  }, [dueDate, isDue, isDueText]);

  return (
    <Container style={containerStyle}>
      <Bar testID="barColor" color={barColor || getFlagColor()} />
      <Content>
        <CardHeader>
          {/* <Logo style={logoStyle} source={lightbulb} resizeMode="contain" /> */}
          <LightBulb size={38} />
          <DueDateText accessibilityLabel="dueDate" isDue={isDue ? 1 : 0}>
            {formattedDate}
          </DueDateText>
        </CardHeader>
        <CardBody>
          <BetweenRow>
            {cnpj && <CnpjText testID="cnpj">CNPJ: {cnpj}</CnpjText>}
            {isPaid === true ? (
              <PaidText testID="paid">PAGO</PaidText>
            ) : (
              <UnPaidText>NÃO PAGO</UnPaidText>
            )}
          </BetweenRow>
          <FlagText color={getFlagColor()}>{text}</FlagText>
          {children}
        </CardBody>
        <CardFooter>
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
              renderText={(number): React.ReactNode => (
                <ValueText>{number}</ValueText>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardValue>
        </CardFooter>
      </Content>
    </Container>
  );
};
