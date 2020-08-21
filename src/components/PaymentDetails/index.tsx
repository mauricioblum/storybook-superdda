import React from 'react';
import NumberFormat from 'react-number-format';
import { ChevronLeft } from '../Icons';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Content,
  BlockView,
  BlockLabel,
  BlockValue,
  BarcodeValue,
  ValueWrapper,
  ValueLabel,
  Value,
  RowBetween,
  Label,
  DefaultValue,
  TypeValue,
  ConfirmPaymentButton,
  ConfirmPaymentButtonText,
} from './styles';
import { formatDateWithBars } from '../utils/formatDate';

export interface PaymentDetailsProps {
  /** Name of the beneficiary to be displayed */
  beneficiaryName: string;
  /** Name of the bank to be displayed */
  bankName: string;
  /** Name of the payer to be displayed */
  payerName: string;
  /** Barcode string */
  barCode: string;
  /** Display value of payment */
  value: number;
  /** Current balance (will be subtracted by value) */
  currentBalance: number;
  /** Type to be payed with */
  payWithType: string;
  /** Due date of the payment */
  dueDate: Date;
  /** Scheduled due date of the payment */
  scheduledDueDate: Date;
  /** Base color of the screen */
  baseColor?: string;

  onClickBack?(): void;

  onConfirmPayment?(): void;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  onClickBack,
  onConfirmPayment,
  beneficiaryName,
  bankName,
  payerName,
  barCode,
  value,
  currentBalance,
  payWithType,
  dueDate,
  scheduledDueDate,
  baseColor,
}) => {
  return (
    <Container>
      <Header>
        <BackButton onPress={onClickBack}>
          <ChevronLeft />
        </BackButton>
        <HeaderTitle>PAGAMENTO</HeaderTitle>
      </Header>
      <Content>
        <BlockView>
          <BlockLabel>Beneficiário</BlockLabel>
          <BlockValue>{beneficiaryName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Banco</BlockLabel>
          <BlockValue>{bankName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Pagador</BlockLabel>
          <BlockValue>{payerName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Código de Barras</BlockLabel>
          <BarcodeValue>{barCode}</BarcodeValue>
        </BlockView>

        <ValueWrapper baseColor={baseColor}>
          <ValueLabel baseColor={baseColor}>Valor</ValueLabel>
          <NumberFormat
            value={value}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            renderText={(number) => (
              <Value baseColor={baseColor}>R$ {number}</Value>
            )}
            decimalScale={2}
            fixedDecimalScale
          />
        </ValueWrapper>

        <BlockView>
          <RowBetween>
            <Label>Pagar com</Label>
            <TypeValue baseColor={baseColor}>{payWithType}</TypeValue>
          </RowBetween>

          <RowBetween>
            <Label>Saldo disponível após pagamento</Label>
            <NumberFormat
              value={currentBalance - value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <DefaultValue>R$ {number}</DefaultValue>}
              decimalScale={2}
              fixedDecimalScale
            />
          </RowBetween>

          <RowBetween>
            <Label>Vencimento</Label>
            <DefaultValue>{formatDateWithBars(dueDate)}</DefaultValue>
          </RowBetween>

          <RowBetween>
            <Label>Agendado para</Label>
            <TypeValue baseColor={baseColor}>
              {formatDateWithBars(scheduledDueDate)}
            </TypeValue>
          </RowBetween>
        </BlockView>

        <BlockView>
          <ConfirmPaymentButton
            baseColor={baseColor}
            onPress={onConfirmPayment}
          >
            <ConfirmPaymentButtonText>
              Confirmar Pagamento
            </ConfirmPaymentButtonText>
          </ConfirmPaymentButton>
        </BlockView>
      </Content>
    </Container>
  );
};
