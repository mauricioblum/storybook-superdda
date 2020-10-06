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
  billDate: string;
  value: number;
  dueDate: Date;
  emissionDate?: Date;
  minimumPaymentValue?: number;
  totalLimitValue?: number;
  totalWithdrawLimitValue?: number;
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
  billDetails?: BeneficiaryBillDetails;
}

export interface BeneficiaryDetailsProps {
  /** Beneficiary info data to be displayed */
  data: BeneficiaryDetailsInfoProps;
  /** Payment history table months reversed or not. */
  historyReverse?: boolean;
  /** Base card color to be applied on elements */
  baseColor?: string;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewCard?: () => void;
  onClickViewBeneficiaryDetails?: () => void;
}

export const BeneficiaryDetails: React.FC<BeneficiaryDetailsProps> = ({
  onClickBack,
  onClickOptions,
  onClickViewCard,
  baseColor = '#8e05c2',
  data,
  historyReverse,
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
          <InfoBlock>
            <ValueTitle>CNPJ: </ValueTitle>
            <ValueDescription>{data.cnpj}</ValueDescription>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Cartão {data.cardNumber}</ValueTitle>
          </InfoBlock>
        </BlockView>

        <BlockView>
          <InfoBlock>
            <ValueTitle>Pagamento Automático: </ValueTitle>
            <ValueActive baseColor={baseColor}>
              {data.autoPayment ? 'Ativado' : 'Desativado'}
            </ValueActive>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Limite de Autorização: </ValueTitle>
            <ValueActive baseColor={baseColor}>
              {data.authorizedLimit ? 'Ativado' : 'Desativado'}
            </ValueActive>
          </InfoBlock>
        </BlockView>

        <CardHolderContainer baseColor={baseColor}>
          <CardHolderCard>
            <CardHolderText>{data.cardHolderName}</CardHolderText>
            <CardHolderButton onPress={onClickViewCard}>
              <CardHolderButtonText baseColor={baseColor}>
                Acessar cartão
              </CardHolderButtonText>
            </CardHolderButton>
          </CardHolderCard>
        </CardHolderContainer>

        {data.billDetails && (
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
      {data.billDetails && (
        <DetailsModal
          isOpen={modalOpen}
          modalType="beneficiary"
          title="Detalhes do Beneficiário"
          titleColor={baseColor}
          onClickClose={() => setModalOpen(false)}
          companyName={data.companyName}
          cnpj={data.cnpj}
          cardNumber={data.cardNumber}
          clientName={data.cardHolderName}
          clientAddress={data.cardHolderAddress}
          dueDate={data.billDetails.dueDate}
          emissionDate={data.billDetails.emissionDate}
          month={data.billDetails.billDate}
          minimumPaymentValue={data.billDetails.minimumPaymentValue}
          value={data.billDetails.value}
          totalLimit={data.billDetails.totalLimitValue}
          totalWithdrawLimit={data.billDetails.totalWithdrawLimitValue}
          interestRate={data.billDetails.interestRate}
          interestRateCET={data.billDetails.interestRateCET}
          interestInstallmentRate={data.billDetails.interestInstallmentRate}
          interestInstallmentRateCET={
            data.billDetails.interestInstallmentRateCET
          }
          interestInstallmentFine={data.billDetails.interestInstallmentFine}
        />
      )}
    </WrapperView>
  );
};
