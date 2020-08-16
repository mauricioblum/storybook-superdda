import React, { useState, useCallback, useMemo } from "react";
import { Dimensions } from 'react-native';
import NumberFormat from "react-number-format";
import { LineChart } from "react-native-chart-kit";
import { CopyIcon } from '../Icons'
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
  Row,
  BarCodeTitle,
  CopyButton,
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
  ChartView,
  ChartLegend,
  ChartLegendText,
  ChartLegendBottom,
  ChartLegendBottomText,
} from "./styles";
import {
  ChevronLeft,
  MoreVertical,
  IuPayIcon,
  UserCheck,
  UserX,
} from "../Icons";
import { DetailsModal } from "../DetailsModal";
import { formatStringDate, formatFullDate } from "../utils/formatDate";

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

export interface ChartData {
  label: string;
  value: number;
}

export interface AccountDetailsProps {
  /** Data to be displayed on screen */
  data: AccountDetailsInfoProps;
  /** Data to be displayed on screen */
  chartData: ChartData[];
  /** Chart legend of the chart */
  chartLegend?: string;
  /** Chart data text to be displayed below the chart */
  chartDataText?: string;
  /** Chart data value to be displayed below the chart */
  chartDataValue?: string | number;
  /** Chart width. Leave undefined if you want responsive width */
  chartWidth?: number;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewAccountDetails?: () => void;
  onClickViewPDF?: () => void;
  onClickRejectAccount?: () => void;
  /** Callback when copy barcode icon clicked, you have to implement clipboard capabilities in your
   * on project, you can use this: https://github.com/react-native-community/clipboard
   */
  onClickCopyBarcode?: (barcode: string) => void;
}

const chartConfig = {
  backgroundGradientFrom: "#f78c49",
  backgroundGradientTo: "#f78c49",
  fillShadowGradientOpacity: 0,
  color: () => "white",
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  propsForLabels: { fontFamily: "NunitoSans-Regular", fontSize: 14 },
  propsForDots: {
    r: "3.5",
    strokeWidth: "2",
    stroke: "#fff",
    fill: "#f78c49",
  },
};

const screenWidth = Dimensions.get("window").width;

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  onClickBack,
  onClickOptions,
  onClickViewPDF,
  onClickViewAccountDetails,
  onClickRejectAccount,
  onClickCopyBarcode,
  chartData,
  data,
  chartLegend,
  chartDataText,
  chartDataValue,
  chartWidth,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const formattedChartData = useMemo(() => {
    return {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          data: chartData.map(data => data.value),
          strokeWidth: 2,
        }
      ],
    };
  }, [chartData]);

  const handleViewAccountDetails = useCallback(() => {
    setModalOpen(!modalOpen);
    onClickViewAccountDetails && onClickViewAccountDetails();
  }, [modalOpen, onClickViewAccountDetails]);

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
            <ValueTitleBold>
              {formatStringDate(data.billDetails.billDate, "short")}
            </ValueTitleBold>
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
          <Row>
            <BarCodeTitle>Código de Barras:</BarCodeTitle>
            <CopyButton onPress={() => onClickCopyBarcode && onClickCopyBarcode(data.billDetails.barCode)}>
              <CopyIcon />
            </CopyButton>
          </Row>
          <BarCodeValue>{data.billDetails.barCode}</BarCodeValue>
        </BlockView>

        <ChartView>
          <ChartLegend>
            <ChartLegendText>{chartLegend}</ChartLegendText>
          </ChartLegend>
          <LineChart
            data={formattedChartData}
            bezier
            width={chartWidth || screenWidth}
            height={170}
            chartConfig={chartConfig}
            withVerticalLines={false}
            withHorizontalLines={false}
            withHorizontalLabels={false}
            withShadow={false}
            xLabelsOffset={-20}
            fromZero
            style={{ paddingRight: -30 }}
          />
          <ChartLegendBottom>
            <ChartLegendBottomText>{chartDataText}</ChartLegendBottomText>
              <ChartLegendBottomText>{chartDataValue}</ChartLegendBottomText>
          </ChartLegendBottom>
        </ChartView>
        <BlockView>
          <PdfButton onPress={onClickViewPDF}>
            <PdfButtonText>PDF da conta</PdfButtonText>
          </PdfButton>
        </BlockView>

        <BlockView>
          <AccountTypeText>
            Conta em Débito automático no Banco Itaú
          </AccountTypeText>
        </BlockView>

        <BlockView>
          <ButtonsWrapper>
            <CustomButton onPress={onClickRejectAccount}>
              <CustomButtonText>Recusar a conta</CustomButtonText>
            </CustomButton>

            <CustomButtonRight onPress={handleViewAccountDetails}>
              <CustomButtonText>Ver detalhes da conta</CustomButtonText>
            </CustomButtonRight>
          </ButtonsWrapper>

          <PaymentHistoryLink>
            <PaymentHistoryLinkText>
              HISTÓRICO DE PAGAMENTOS
            </PaymentHistoryLinkText>
          </PaymentHistoryLink>
        </BlockView>
      </Container>
      {data.billDetails && (
        <DetailsModal
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
      )}
    </WrapperView>
  );
};
