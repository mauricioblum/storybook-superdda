import React, { useCallback, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { ChevronLeft, MoreVertical } from '../Icons';
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
  ShareReceiptButton,
  ShareReceiptButtonText,
  OptionsButton,
} from './styles';
import { formatDateWithBars } from '../utils/formatDate';

export interface ReceiptProps {
  /** Name of the cedent to be displayed */
  cedentName: string;
  /** CNPJ  */
  cnpj?: string;
  /** Name of the payer */
  payerName?: string;
  /** Barcode to be displayed */
  barCode?: string;
  /** Date of payment */
  paidDate: Date;
  /** Value of payment */
  value: number;
  /** Charged Value of payment */
  chargedValue: number;
  /** Discount of the bill */
  discount: number;
  /** Interest of the bill */
  interest: number;
  /** Fine (tax) of the bill */
  fine: number;
  /** Authentication code of the bill */
  authenticationCode: string;
  /** Due Date */
  dueDate: Date;
  /** Base color of screen */
  baseColor?: string;

  onClickBack?(): void;

  onClickOptions?(): void;

  onClickShareReceipt?(): void;
}

export const Receipt: React.FC<ReceiptProps> = ({
  cedentName,
  cnpj,
  payerName,
  barCode,
  paidDate,
  value,
  chargedValue,
  discount,
  interest,
  fine,
  authenticationCode,
  dueDate,
  baseColor,
  onClickBack,
  onClickOptions,
  onClickShareReceipt,
}) => {
  const handleClickShareReceipt = useCallback(() => {
    onClickShareReceipt && onClickShareReceipt();
  }, [onClickShareReceipt]);

  const formattedPaymentDate = useMemo(() => {
    return formatDateWithBars(paidDate);
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
        <HeaderTitle>COMPROVANTE</HeaderTitle>
        <OptionsButton onPress={onClickOptions}>
          <MoreVertical />
        </OptionsButton>
      </Header>
      <Content>
        <BlockView>
          <BlockLabel>Cedente</BlockLabel>
          <BlockValue>{cedentName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>CNPJ</BlockLabel>
          <BlockValue>{cnpj}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Pagador</BlockLabel>
          <BlockValue>{payerName}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Código de Barras</BlockLabel>
          <BarcodeValue>{barCode}</BarcodeValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Data de Vencimento:</BlockLabel>
          <BlockValue>{formattedDueDate}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Data do Pagamento:</BlockLabel>
          <BlockValue>{formattedPaymentDate}</BlockValue>
        </BlockView>

        <BlockView>
          <BlockLabel>Valor do Documento:</BlockLabel>
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

        <BlockView>
          <BlockLabel>Descontos:</BlockLabel>
          <NumberFormat
            value={discount}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            renderText={(number) => <BlockValue>{number}</BlockValue>}
            decimalScale={2}
            fixedDecimalScale
          />
        </BlockView>

        <BlockView>
          <BlockLabel>Juros:</BlockLabel>
          <NumberFormat
            value={interest}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            renderText={(number) => <BlockValue>{number}</BlockValue>}
            decimalScale={2}
            fixedDecimalScale
          />
        </BlockView>

        <BlockView>
          <BlockLabel>Multa:</BlockLabel>
          <NumberFormat
            value={fine}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            renderText={(number) => <BlockValue>{number}</BlockValue>}
            decimalScale={2}
            fixedDecimalScale
          />
        </BlockView>

        <BlockView>
          <BlockLabel>Valor Cobrado:</BlockLabel>
          <NumberFormat
            value={chargedValue}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            renderText={(number) => <BlockValue>R$ {number}</BlockValue>}
            decimalScale={2}
            fixedDecimalScale
          />
        </BlockView>

        <BlockView>
          <BlockLabel>Código de Autenticação:</BlockLabel>
          <BlockValue>{authenticationCode}</BlockValue>
        </BlockView>

        <BlockView>
          <ShareReceiptButton
            baseColor={baseColor}
            onPress={handleClickShareReceipt}
          >
            <ShareReceiptButtonText baseColor={baseColor}>
              Compartilhar Comprovante
            </ShareReceiptButtonText>
          </ShareReceiptButton>
        </BlockView>
      </Content>
    </Container>
  );
};
