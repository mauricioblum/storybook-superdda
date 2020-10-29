import React, { useCallback, useMemo, useState } from 'react';
import NumberFormat from 'react-number-format';
import {
  WrapperView,
  Container,
  Header,
  Logo,
  BackButton,
  OptionsButton,
  TitleWrapper,
  Title,
  IconsWrapper,
  BlockView,
  InfoBlock,
  ValueTitle,
  ValueDescription,
  ValueActive,
  CardHolderContainer,
  CardHolderCard,
  CardHolderText,
  CardHolderButton,
  CardHolderButtonText,
  ViewBeneficiaryDetailsButton,
  ViewBeneficiaryDetailsButtonText,
  PaymentHistoryContainer,
  PaymentHistoryRow,
  PaymentHistoryTitle,
  PaymentHistoryData,
  PaymentHistoryItem,
  PaymentMonthWrapper,
  PaymentMonth,
  PaymentOpenStatus,
  PaymentValueInfo,
  PaymentCurrency,
  PaymentValue,
} from './styles';
import {
  ChevronLeft,
  MoreVertical,
  IuPayIcon,
  UserCheck,
  UserX,
  PaymentHistoryIcon,
} from '../Icons';
import { DetailsModal } from '../DetailsModal';
import { formatStringDate } from '../utils/formatDate';

export interface BeneficiaryPaymentHistoryItem {
  date: string;
  value: number;
  isOpen?: boolean;
}

export interface BeneficiaryBillDetails {
  interestRate?: number;
  interestRateCET?: number;
  interestInstallmentRate?: number;
  interestInstallmentRateCET?: number;
  interestInstallmentFine?: number;
}

export interface BeneficiaryDetailsInfoProps {
  companyName?: string;
  companyLogo?: string;
  cnpj?: string;
  cardNumber?: string;
  autoPayment?: boolean;
  authorizedLimit?: boolean;
  cardHolderName?: string;
  cardHolderAddress?: string;
  paymentHistory?: BeneficiaryPaymentHistoryItem[];
  isFromIuPay?: boolean;
  isUserAdded?: boolean;
  /** Beneficiary Extra details, must pass Empty object if not set */
  beneficiaryDetails: BeneficiaryBillDetails;
}

export interface BeneficiaryDetailsProps {
  /** Beneficiary info data to be displayed */
  data: BeneficiaryDetailsInfoProps;
  /** Payment history table months reversed or not. */
  historyReverse?: boolean;
  /** Payment history table months reversed or not. */
  showBeneficiariesDetailsButton?: boolean;
  /** Base card color to be applied on elements */
  baseColor?: string;
  /** Open Card Holder text */
  cardHolderOpenText?: string;
  showCardHolderNameOnModal?: boolean;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewCard?: () => void;
  onClickViewBeneficiaryDetails?: () => void;
}

export const BeneficiaryDetails: React.FC<BeneficiaryDetailsProps> = ({
  onClickBack,
  onClickOptions,
  onClickViewCard,
  showCardHolderNameOnModal = true,
  baseColor = '#8e05c2',
  data,
  cardHolderOpenText = 'Acessar cartão',
  historyReverse,
  showBeneficiariesDetailsButton = true,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const paymentHistory = useMemo(() => {
    if (data.paymentHistory) {
      return historyReverse
        ? data.paymentHistory.reverse()
        : [...data.paymentHistory];
    }
    return null;
  }, [data.paymentHistory, historyReverse]);

  const formatDate = useCallback((date: string) => {
    return formatStringDate(date);
  }, []);

  return (
    <WrapperView>
      <Container>
        <Header>
          <BackButton onPress={onClickBack}>
            <ChevronLeft />
          </BackButton>
          <Logo source={{ uri: data.companyLogo }} resizeMode="contain" />
          <OptionsButton onPress={onClickOptions}>
            <MoreVertical />
          </OptionsButton>
        </Header>
        <TitleWrapper>
          <Title baseColor={baseColor}>{data.companyName}</Title>
          <IconsWrapper>
            {data.isFromIuPay && <IuPayIcon />}
            {data.isUserAdded ? <UserCheck /> : <UserX color="#c1272d" />}
          </IconsWrapper>
        </TitleWrapper>

        <BlockView>
          {data.cnpj && (
            <InfoBlock>
              <ValueTitle>CNPJ: </ValueTitle>
              <ValueDescription>{data.cnpj}</ValueDescription>
            </InfoBlock>
          )}
          {data.cardNumber && (
            <InfoBlock>
              <ValueTitle>Cartão {data.cardNumber}</ValueTitle>
            </InfoBlock>
          )}
        </BlockView>

        <BlockView>
          {(data.autoPayment || data.autoPayment === false) && (
            <InfoBlock>
              <ValueTitle>Pagamento Automático: </ValueTitle>
              <ValueActive baseColor={baseColor}>
                {data.autoPayment ? 'Ativado' : 'Desativado'}
              </ValueActive>
            </InfoBlock>
          )}
          {(data.authorizedLimit || data.authorizedLimit === false) && (
            <InfoBlock>
              <ValueTitle>Limite de Autorização: </ValueTitle>
              <ValueActive baseColor={baseColor}>
                {data.authorizedLimit ? 'Ativado' : 'Desativado'}
              </ValueActive>
            </InfoBlock>
          )}
        </BlockView>

        <CardHolderContainer baseColor={baseColor}>
          <CardHolderCard>
            <CardHolderText>{data.cardHolderName}</CardHolderText>
            <CardHolderButton onPress={onClickViewCard}>
              <CardHolderButtonText baseColor={baseColor}>
                {cardHolderOpenText}
              </CardHolderButtonText>
            </CardHolderButton>
          </CardHolderCard>
        </CardHolderContainer>

        {showBeneficiariesDetailsButton && (
          <BlockView>
            <ViewBeneficiaryDetailsButton
              onPress={() => setModalOpen(!modalOpen)}
              baseColor={baseColor}
            >
              <ViewBeneficiaryDetailsButtonText baseColor={baseColor}>
                Ver detalhes do beneficiário
              </ViewBeneficiaryDetailsButtonText>
            </ViewBeneficiaryDetailsButton>
          </BlockView>
        )}

        {paymentHistory && (
          <PaymentHistoryContainer>
            <PaymentHistoryRow>
              <PaymentHistoryIcon />
              <PaymentHistoryTitle>Histórico de Pagamentos</PaymentHistoryTitle>
            </PaymentHistoryRow>

            <PaymentHistoryData>
              {paymentHistory.map((item) => (
                <PaymentHistoryItem key={item.date}>
                  <PaymentMonthWrapper>
                    <PaymentMonth>{formatDate(item.date)}</PaymentMonth>
                    {item.isOpen && (
                      <PaymentOpenStatus>em aberto</PaymentOpenStatus>
                    )}
                  </PaymentMonthWrapper>
                  <PaymentValueInfo>
                    <PaymentCurrency>R$ </PaymentCurrency>
                    <NumberFormat
                      value={item.value}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      renderText={(number) => (
                        <PaymentValue>{number}</PaymentValue>
                      )}
                      decimalScale={2}
                      fixedDecimalScale
                    />
                  </PaymentValueInfo>
                </PaymentHistoryItem>
              ))}
            </PaymentHistoryData>
          </PaymentHistoryContainer>
        )}
      </Container>
      {showBeneficiariesDetailsButton && (
        <DetailsModal
          isOpen={modalOpen}
          modalType="beneficiary"
          title="Detalhes do Beneficiário"
          titleColor={baseColor}
          onClickClose={() => setModalOpen(false)}
          companyName={data.companyName}
          cnpj={data.cnpj}
          cardNumber={data.cardNumber}
          clientName={
            showCardHolderNameOnModal ? data.cardHolderName : undefined
          }
          clientAddress={data.cardHolderAddress}
          interestRate={data.beneficiaryDetails.interestRate}
          interestRateCET={data.beneficiaryDetails.interestRateCET}
          interestInstallmentRate={
            data.beneficiaryDetails.interestInstallmentRate
          }
          interestInstallmentRateCET={
            data.beneficiaryDetails.interestInstallmentRateCET
          }
          interestInstallmentFine={
            data.beneficiaryDetails.interestInstallmentFine
          }
        />
      )}
    </WrapperView>
  );
};
