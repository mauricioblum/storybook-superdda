import React, { useCallback, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { ChevronLeft } from '../Icons';
import {
  Container,
  Header,
  BackButton,
  HeaderRow,
  HeaderTitle,
  HeaderImage,
  Content,
  BlockView,
  BlockLabel,
  BlockValue,
  ValueWrapper,
  ValueLabel,
  ViewReceiptButton,
  ViewReceiptButtonText,
} from './styles';
import {
  formatDateWithBars,
  formatFullDateToMonthDate,
} from '../utils/formatDate';

export interface PaidDetailsProps {
  /** Name of the beneficiary to be displayed */
  beneficiaryName: string;
  /** Screen Title to be displayed  */
  screenTitle?: string;
  /** Screen Image  */
  screenImage?: string;
  /** Date of payment */
  paidDate: Date;
  /** Value of payment */
  value: number;
  /** Due Date */
  dueDate: Date;
  /** Payment message to be displayed */
  paymentMessage?: string;
  /** Base color of screen */
  baseColor?: string;
  /** Check if receipt is available */
  receiptAvailable?: boolean;

  onClickBack?(): void;

  onClickViewReceipt?(): void;
}

export const PaidDetails: React.FC<PaidDetailsProps> = ({
  beneficiaryName,
  screenTitle,
  screenImage,
  paidDate,
  paymentMessage = 'Sua conta está paga',
  onClickBack,
  onClickViewReceipt,
  value,
  dueDate,
  baseColor,
  receiptAvailable,
}) => {
  const handleClickViewReceipt = useCallback(() => {
    onClickViewReceipt && onClickViewReceipt();
  }, [onClickViewReceipt]);

  const formattedPaymentDate = useMemo(() => {
    return formatFullDateToMonthDate(paidDate);
  }, [paidDate]);

  const formattedDueDate = useMemo(() => {
    return formatDateWithBars(dueDate);
  }, [dueDate]);

  return (
    <Container>
      <Header>
        <BackButton onPress={onClickBack}>
          <ChevronLeft />
        </BackButton>
        <HeaderRow>
          {screenImage && (
            <HeaderImage source={{ uri: screenImage }} resizeMode="contain" />
          )}
          <HeaderTitle>{screenTitle || beneficiaryName}</HeaderTitle>
        </HeaderRow>
      </Header>
      <Content>
        <BlockView>
          <BlockValue>{beneficiaryName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockValue>{formattedPaymentDate}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Vencimento</BlockLabel>
          <BlockValue>{formattedDueDate}</BlockValue>
        </BlockView>

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
          <ValueLabel baseColor={baseColor}>{paymentMessage}</ValueLabel>
        </ValueWrapper>

        <BlockView>
          <ViewReceiptButton
            baseColor={baseColor}
            onPress={handleClickViewReceipt}
            disabled={!receiptAvailable}
            hasDisabledStyle={!receiptAvailable}
          >
            <ViewReceiptButtonText
              baseColor={baseColor}
              hasDisabledStyle={!receiptAvailable}
            >
              Ver Comprovante
            </ViewReceiptButtonText>
          </ViewReceiptButton>
        </BlockView>
      </Content>
    </Container>
  );
};
