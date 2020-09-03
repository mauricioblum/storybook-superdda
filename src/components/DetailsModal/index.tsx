import React from 'react';
import NumberFormat from 'react-number-format';
import { View, Modal, Platform } from 'react-native';
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
  modalType: 'beneficiary' | 'account';
  title?: string;
  titleColor?: string;
  companyName?: string;
  cnpj?: string;
  cardNumber?: string;
  clientName?: string;
  clientAddress?: string;
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
}

const renderModal = (
  props: DetailsModalProps,
  isMobile?: boolean,
): JSX.Element => {
  const {
    isOpen,
    title,
    onClickClose,
    companyName,
    cnpj,
    cardNumber,
    clientName,
    clientAddress,
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
    titleColor,
    modalType,
  } = props;

  const isAccount = modalType === 'account';

  return isOpen ? (
    <ModalWebContainer mobile={isMobile} modalType={modalType}>
      <ModalHeader>
        <ModalRow>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalButton onPress={onClickClose}>
            <CloseCircle size={24} />
          </CloseModalButton>
        </ModalRow>
      </ModalHeader>
      <ModalContent>
        <Title color={titleColor}>{companyName}</Title>
        <ModalText>CNPJ {cnpj}</ModalText>
        <ModalText>Cartão {cardNumber}</ModalText>

        {isAccount ? (
          <ModalInfoBlock>
            <ModalText modalType={modalType}>{clientName}</ModalText>
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
        ) : (
          <>
            <ModalInfoBlock>
              <ModalInfoRow>
                <ModalText modalType={modalType}>{clientName}</ModalText>
              </ModalInfoRow>
            </ModalInfoBlock>
            <ModalInfoBlock>
              <ModalInfoRow>
                <ModalTextBold>Endereço</ModalTextBold>
              </ModalInfoRow>
              <ModalInfoRow>
                <ModalText style={{ maxWidth: '250px' }}>
                  {clientAddress}
                </ModalText>
              </ModalInfoRow>
            </ModalInfoBlock>
          </>
        )}

        {isAccount && (
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
        )}

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

export const DetailsModal: React.FC<DetailsModalProps> = (props) => {
  const { isOpen } = props;

  return Platform.OS !== 'web' ? (
    <Container>
      <Modal animationType="slide" visible={isOpen}>
        {renderModal(props, true)}
      </Modal>
    </Container>
  ) : (
    renderModal(props)
  );
};
