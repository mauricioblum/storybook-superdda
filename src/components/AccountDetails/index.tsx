import React from "react";
import NumberFormat from "react-number-format";
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
  ValueTitleBold,
  PaymentHistoryItem,
  BarCodeTitle,
  BarCodeValue,
  PdfButton,
  PdfButtonText,
  AccountTypeText,
  ButtonsWrapper,
  CustomButton,
  CustomButtonRight,
  CustomButtonText,
  PaymentHistoryLink,
  PaymentHistoryLinkText,
} from "./styles";
import {
  ChevronLeft,
  MoreVertical,
  IuPayIcon,
  UserCheck,
  UserX,
} from "../Icons";
// import { BeneficiaryDetailsModal } from '../BeneficiaryDetailsModal';
import {
  formatStringDate,
  formatFullDate,
} from "../utils/formatDate";

export interface PaymentHistoryItem {
  date: string;
  value: number;
}

export interface BillDetails {
  billDate: string;
  value: number;
  dueDate: Date;
  emissionDate: Date;
  minimumPaymentValue: number;
  totalLimitValue: number;
  totalWithdrawLimitValue: number;
  interestRate: number;
  interestRateCET: number;
  interestInstallmentRate: number;
  interestInstallmentRateCET: number;
  interestInstallmentFine: number;
  barCode: string;
}

export interface AccountDetailsInfoProps {
  companyName?: string;
  companyLogo?: string;
  cnpj?: string;
  cardNumber?: string;
  autoPayment?: boolean;
  authorizedLimit?: boolean;
  cardHolderName?: string;
  paymentHistory?: PaymentHistoryItem[];
  isFromIuPay?: boolean;
  isUserAdded?: boolean;
  billDetails: BillDetails;
}

export interface AccountDetailsProps {
  /** Beneficiary info data to be displayed */
  data: AccountDetailsInfoProps;
  /** Payment history table months reversed or not. */
  historyReverse?: boolean;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewCard?: () => void;
  onClickViewAccountDetails?: () => void;
  onClickViewPDF?: () => void;
  onClickRejectAccount?: () => void;
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  onClickBack,
  onClickOptions,
  onClickViewCard,
  onClickViewPDF,
  onClickViewAccountDetails,
  onClickRejectAccount,
  data,
  historyReverse,
}) => {
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
          <Title>{data.companyName}</Title>
          <IconsWrapper>
            {data.isFromIuPay && <IuPayIcon />}
            {data.isUserAdded ? <UserCheck /> : <UserX color="#c1272d" />}
          </IconsWrapper>
        </TitleWrapper>

        <BlockView>
          <InfoBlock>
            <ValueTitle>CNPJ: {data.cnpj}</ValueTitle>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Cartão {data.cardNumber}</ValueTitle>
          </InfoBlock>
        </BlockView>

        <BlockView>
          <InfoBlock>
            <ValueTitleBold>{formatStringDate(data.billDetails.billDate, 'short')}</ValueTitleBold>
          </InfoBlock>
          <InfoBlock>
            <NumberFormat 
              value={data.billDetails.value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <ValueTitle>Valor R$ {number}</ValueTitle>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </InfoBlock>
          <InfoBlock>
            <NumberFormat
              value={data.billDetails.minimumPaymentValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <ValueTitle>Pagamento Mínimo R$ {number}</ValueTitle>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>
              Vencimento: {formatFullDate(data.billDetails.dueDate)}
            </ValueTitle>
          </InfoBlock>

          <InfoBlock>
            <ValueTitle>
              Emissão e Envio: {formatFullDate(data.billDetails.emissionDate)}
            </ValueTitle>
          </InfoBlock>
        </BlockView>

        <BlockView>
            <BarCodeTitle>
              Código de Barras: 
            </BarCodeTitle>
            <BarCodeValue>
            {data.billDetails.barCode}
            </BarCodeValue>
        </BlockView>

        <BlockView>
          <PdfButton onPress={onClickViewPDF}>
            <PdfButtonText>PDF da conta</PdfButtonText>
          </PdfButton>
        </BlockView>

        <BlockView>
          <AccountTypeText>Conta em Débito automático no Banco Itaú</AccountTypeText>
        </BlockView>

        <BlockView>
        <ButtonsWrapper>
          <CustomButton onPress={onClickRejectAccount}>
            <CustomButtonText>Recusar a conta</CustomButtonText>
          </CustomButton>

          <CustomButtonRight onPress={onClickViewAccountDetails}>
            <CustomButtonText>Ver detalhes da conta</CustomButtonText>
          </CustomButtonRight>
        </ButtonsWrapper>

        <PaymentHistoryLink>
          <PaymentHistoryLinkText>HISTÓRICO DE PAGAMENTOS</PaymentHistoryLinkText>
        </PaymentHistoryLink>
        </BlockView>
      </Container>
      {/* {data.billDetails && (
        <AccountDetailsModal
          isOpen={modalOpen}
          title="Detalhes da conta"
          renderMobile={false}
          onClickClose={() => setModalOpen(false)}
          companyName={data.companyName}
          cnpj={data.cnpj}
          cardNumber={data.cardNumber}
          clientName={data.cardHolderName}
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
      )} */}
    </WrapperView>
  );
};
