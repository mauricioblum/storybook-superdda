import React, { useCallback, useMemo } from 'react';
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
  ViewReceiptButton,
  ViewReceiptButtonText,
} from './styles';
import {
  formatDateWithBars,
  formatFullDateToMonthDate,
} from '../utils/formatDate';

export interface PaymentDetailsProps {
  /** Name of the beneficiary to be displayed */
  beneficiaryName?: string;
  /** Name of the bank to be displayed */
  bankName?: string;
  /** Name of the payer to be displayed */
  payerName?: string;
  /** Barcode string */
  barCode?: string;
  /** Display value of payment */
  value?: number;
  /** Current balance (will be subtracted by value) */
  currentBalance?: number;
  /** Type to be payed with */
  payWithType?: string;
  /** Due date of the payment */
  dueDate: Date | string;
  /** Scheduled due date of the payment */
  scheduledDueDate?: Date | string;
  /** Base color of the screen */
  baseColor?: string;
  /** Type of screen (default: Payment) */
  type?: 'Payment' | 'Schedule';
  /** If bill is already paid */
  isPaid?: boolean;
  /** Confirm Scheduled Text in Button */
  confirmScheduleButtonText?: string;
  /** Confirm Payment Text in Button */
  confirmPaymentButtonText?: string;

  onClickBack?(): void;

  onClickViewReceipt?(): void;

  onConfirmPaymentSchedule?(type: string): void;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  onClickBack,
  onClickViewReceipt,
  onConfirmPaymentSchedule,
  beneficiaryName,
  bankName,
  payerName,
  barCode,
  value,
  currentBalance,
  payWithType,
  isPaid = false,
  dueDate,
  scheduledDueDate,
  baseColor,
  type = 'Payment',
  confirmScheduleButtonText = 'Confirmar Agendamento',
  confirmPaymentButtonText = 'Confirmar Pagamento',
}) => {
  const handlePaymentSchedule = useCallback(
    (paymentType: string) => {
      onConfirmPaymentSchedule && onConfirmPaymentSchedule(paymentType);
    },
    [onConfirmPaymentSchedule],
  );

  const realDate = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
  const formattedDueDate = useMemo(() => {
    return formatDateWithBars(realDate);
  }, [realDate]);

  const formattedScheduledDueDate = useMemo(() => {
    if (!scheduledDueDate) {
      return new Date();
    }
    const realScheduledDate =
      typeof scheduledDueDate === 'string'
        ? new Date(scheduledDueDate)
        : scheduledDueDate;
    return formatDateWithBars(realScheduledDate);
  }, [scheduledDueDate]);

  if (isPaid) {
    return (
      <Container>
        <Header>
          <BackButton onPress={onClickBack}>
            <ChevronLeft />
          </BackButton>
          <HeaderTitle>PAGAMENTO</HeaderTitle>
        </Header>
        <Content>
          {beneficiaryName && (
            <BlockView>
              <BlockLabel>Beneficiário</BlockLabel>
              <BlockValue>{beneficiaryName}</BlockValue>
            </BlockView>
          )}
          {realDate && (
            <>
              <BlockView>
                <BlockValue>{formatFullDateToMonthDate(realDate)}</BlockValue>
              </BlockView>
              <BlockView>
                <BlockLabel>Vencimento</BlockLabel>
                <BlockValue>{formatDateWithBars(realDate)}</BlockValue>
              </BlockView>
            </>
          )}
          <BlockView>
            <BlockLabel>Valor</BlockLabel>
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <BlockValue>R$ {number}</BlockValue>}
              decimalScale={2}
              fixedDecimalScale
            />
          </BlockView>
          <ValueWrapper baseColor={baseColor}>
            <Value style={{ textAlign: 'center' }} baseColor={baseColor}>
              Sua conta está paga
            </Value>
          </ValueWrapper>
          <BlockView>
            <ViewReceiptButton
              baseColor={baseColor}
              onPress={onClickViewReceipt}
            >
              <ViewReceiptButtonText baseColor={baseColor}>
                Ver comprovante
              </ViewReceiptButtonText>
            </ViewReceiptButton>
          </BlockView>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={onClickBack}>
          <ChevronLeft />
        </BackButton>
        <HeaderTitle>PAGAMENTO</HeaderTitle>
      </Header>
      <Content>
        {beneficiaryName && (
          <BlockView>
            <BlockLabel>Beneficiário</BlockLabel>
            <BlockValue>{beneficiaryName}</BlockValue>
          </BlockView>
        )}

        {bankName && (
          <BlockView>
            <BlockLabel>Banco</BlockLabel>
            <BlockValue>{bankName}</BlockValue>
          </BlockView>
        )}

        {payerName && (
          <BlockView>
            <BlockLabel>Pagador</BlockLabel>
            <BlockValue>{payerName}</BlockValue>
          </BlockView>
        )}

        {barCode && (
          <BlockView>
            <BlockLabel>Código de Barras</BlockLabel>
            <BarcodeValue>{barCode}</BarcodeValue>
          </BlockView>
        )}

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
          {payWithType && (
            <RowBetween>
              <Label>Pagar com</Label>
              <TypeValue baseColor={baseColor}>{payWithType}</TypeValue>
            </RowBetween>
          )}

          {currentBalance && value && (
            <RowBetween>
              <Label>Saldo disponível após pagamento</Label>
              <NumberFormat
                value={currentBalance - value}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                renderText={(number) => (
                  <DefaultValue>R$ {number}</DefaultValue>
                )}
                decimalScale={2}
                fixedDecimalScale
              />
            </RowBetween>
          )}

          <RowBetween>
            <Label>Vencimento</Label>
            <DefaultValue>{formattedDueDate}</DefaultValue>
          </RowBetween>

          {type === 'Schedule' && (
            <RowBetween>
              <Label>Agendado para</Label>
              <TypeValue baseColor={baseColor}>
                {formattedScheduledDueDate}
              </TypeValue>
            </RowBetween>
          )}
        </BlockView>

        {type === 'Schedule' ? (
          <BlockView>
            <ConfirmPaymentButton
              baseColor={baseColor}
              onPress={() => handlePaymentSchedule(type)}
            >
              <ConfirmPaymentButtonText>
                {confirmScheduleButtonText}
              </ConfirmPaymentButtonText>
            </ConfirmPaymentButton>
          </BlockView>
        ) : (
          <BlockView>
            <ConfirmPaymentButton
              baseColor={baseColor}
              onPress={() => handlePaymentSchedule(type)}
            >
              <ConfirmPaymentButtonText>
                {confirmPaymentButtonText}
              </ConfirmPaymentButtonText>
            </ConfirmPaymentButton>
          </BlockView>
        )}
      </Content>
    </Container>
  );
};
