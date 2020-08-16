import React from 'react';
import NumberFormat from 'react-number-format';
import { View, Modal, Alert } from 'react-native';
import { CloseCircle } from '../Icons';
import {
  Container,
  ModalHeader,
  ModalRow,
  CloseModalButton,
  ModalTitle,
  ModalContent,
  ModalWebContainer,
  Title,
  ModalText,
  ModalTextBold,
  ModalInfoBlock,
  ModalInfoBlockLast,
  ModalInfoRow,
} from './styles';
import { formatMonthDate, formatStringDate } from '../utils/formatDate';

export interface DetailsModalProps {
  title?: string;
  companyName?: string;
  cnpj?: string;
  cardNumber?: string;
  clientName?: string;
  month?: string;
  value?: number;
  dueDate?: Date;
  emissionDate?: Date;
  minimumPaymentValue?: number;
  totalLimit?: number;
  totalWithdrawLimit?: number;
  interestRate?: number;
  interestRateCET?: number;
  interestInstallmentRate?: number;
  interestInstallmentRateCET?: number;
  interestInstallmentFine?: number;
  isOpen: boolean;
  onClickClose: () => void;
  renderMobile: boolean;
}

const renderModal = (props: DetailsModalProps): JSX.Element => {
  const {
    isOpen,
    title,
    onClickClose,
    companyName,
    cnpj,
    cardNumber,
    clientName,
    month,
    value,
    dueDate,
    emissionDate,
    minimumPaymentValue,
    totalLimit,
    totalWithdrawLimit,
    interestRate,
    interestRateCET,
    interestInstallmentRate,
    interestInstallmentRateCET,
    interestInstallmentFine,
  } = props;

  return isOpen ? (
    <ModalWebContainer>
      <ModalHeader>
        <ModalRow>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalButton onPress={onClickClose}>
            <CloseCircle size={24} />
          </CloseModalButton>
        </ModalRow>
      </ModalHeader>
      <ModalContent>
        <Title>{companyName}</Title>
        <ModalText>CNPJ {cnpj}</ModalText>
        <ModalText>Cartão {cardNumber}</ModalText>

        <ModalInfoBlock>
          <ModalText>{clientName}</ModalText>
          <ModalTextBold>
            {formatStringDate(month, 'short').toUpperCase()}
          </ModalTextBold>

          <ModalInfoRow>
            <ModalText>Valor: </ModalText>
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <ModalTextBold>R$ {number}</ModalTextBold>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </ModalInfoRow>

          <ModalInfoRow>
            <ModalText>Vencimento: </ModalText>
            <ModalTextBold>{formatMonthDate(dueDate)}</ModalTextBold>
          </ModalInfoRow>

          <ModalInfoRow>
            <ModalText>Emissão e Envio: </ModalText>
            <ModalText>{formatMonthDate(emissionDate)}</ModalText>
          </ModalInfoRow>
        </ModalInfoBlock>

        <ModalInfoBlock>
          <ModalInfoRow>
            <ModalText>Pagamento mínimo: </ModalText>
            <NumberFormat
              value={minimumPaymentValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <ModalTextBold>R$ {number}</ModalTextBold>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </ModalInfoRow>

          <ModalInfoRow>
            <ModalText>Limite total: </ModalText>
            <NumberFormat
              value={totalLimit}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ModalText>R$ {number}</ModalText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </ModalInfoRow>

          <ModalInfoRow>
            <ModalText>Limite de saque total: </ModalText>
            <NumberFormat
              value={totalWithdrawLimit}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ModalText>R$ {number}</ModalText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </ModalInfoRow>
        </ModalInfoBlock>

        <ModalInfoBlock>
          <ModalTextBold>Juros rotativo:</ModalTextBold>
          <ModalText>
            {interestRate}% am CET: {interestRateCET}% aa
          </ModalText>
        </ModalInfoBlock>

        <ModalInfoBlockLast>
          <ModalTextBold>Juros de parcelamento:</ModalTextBold>
          <ModalText>consulte o app na contratação</ModalText>
          <ModalText>juros e mora em caso de atraso:</ModalText>
          <ModalText>
            {interestInstallmentRate}% am + {interestInstallmentFine}% multa
            CET: {interestInstallmentRateCET}% aa
          </ModalText>
        </ModalInfoBlockLast>
      </ModalContent>
    </ModalWebContainer>
  ) : (
    <View />
  );
};

export const DetailsModal: React.FC<DetailsModalProps> = (
  props,
) => {
  const { renderMobile, isOpen, title } = props;

  return renderMobile ? (
    <Container>
      <Modal
        animationType="slide"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Container>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
          </ModalContent>
        </Container>
      </Modal>
    </Container>
  ) : (
    renderModal(props)
  );
};
