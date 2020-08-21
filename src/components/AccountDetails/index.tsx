import React, { useState, useCallback, useMemo } from 'react';
import { lighten } from 'polished';
import { Dimensions } from 'react-native';
import NumberFormat from 'react-number-format';
import { LineChart } from 'react-native-chart-kit';
import { CopyIcon, PaymentHistoryIcon } from '../Icons';
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
  RowBetween,
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
  AutomaticPaymentText,
  PaymentButtonView,
  PaymentButton,
  PaymentButtonText,
} from './styles';
import {
  ChevronLeft,
  MoreVertical,
  IuPayIcon,
  UserCheck,
  UserX,
} from '../Icons';
import { DetailsModal } from '../DetailsModal';
import { formatStringDate, formatFullDate } from '../utils/formatDate';
import CustomSwitch from '../CustomSwitch';

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
  isAutomaticDebit?: boolean;
  automaticDebitBankName?: string;
  billDetails: BillDetails;
}

export interface ChartData {
  label: string;
  value: number;
}

export interface AccountDetailsProps {
  /** Base card color to be applied on elements */
  baseColor?: string;
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
  /** Check if the account PDF is available */
  pdfAvailable?: boolean;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewAccountDetails?: () => void;
  onClickViewPDF?: () => void;
  onClickRejectAccount?: () => void;
  /** Callback when copy barcode icon clicked, you have to implement clipboard capabilities in your
   * on project, you can use this: https://github.com/react-native-community/clipboard
   */
  onClickCopyBarcode?: (barcode: string) => void;
  onSwitchAutoPaymentChange?: (value: boolean) => void;
}

const screenWidth = Dimensions.get('window').width;

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  baseColor = '#8e05c2',
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
  pdfAvailable,
  onSwitchAutoPaymentChange,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const formattedChartData = useMemo(() => {
    return {
      labels: chartData.map((data) => data.label),
      datasets: [
        {
          data: chartData.map((data) => data.value),
          strokeWidth: 2,
        },
      ],
    };
  }, [chartData]);

  const handleViewAccountDetails = useCallback(() => {
    setModalOpen(!modalOpen);
    onClickViewAccountDetails && onClickViewAccountDetails();
  }, [modalOpen, onClickViewAccountDetails]);

  const chartConfig = {
    backgroundGradientFrom: baseColor,
    backgroundGradientTo: baseColor,
    fillShadowGradientOpacity: 0,
    color: () => 'white',
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForLabels: { fontFamily: 'NunitoSans-Regular', fontSize: 14 },
    propsForDots: {
      r: '3.5',
      strokeWidth: '2',
      stroke: '#fff',
      fill: baseColor,
    },
  };

  const [paymentSwitch, setPaymentSwitch] = useState(false);

  const switchColors = useMemo(() => {
    return {
      backgroundActive: lighten(0.25, baseColor),
      backgroundInactive: '#b3b3b3',
      circleActiveColor: baseColor,
      circleInActiveColor: '#717171',
    };
  }, [baseColor]);

  const handleSwitchPaymentChange = useCallback(
    (value: boolean) => {
      setPaymentSwitch(value);
      onSwitchAutoPaymentChange && onSwitchAutoPaymentChange(value);
    },
    [onSwitchAutoPaymentChange]
  );

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
            <ValueTitle>CNPJ: {data.cnpj}</ValueTitle>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Cartão {data.cardNumber}</ValueTitle>
          </InfoBlock>
        </BlockView>

        <BlockView>
          <InfoBlock>
            <ValueTitleBold>
              {formatStringDate(data.billDetails.billDate, 'short')}
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
            <CopyButton
              onPress={() =>
                onClickCopyBarcode &&
                onClickCopyBarcode(data.billDetails.barCode)
              }
            >
              <CopyIcon />
            </CopyButton>
          </Row>
          <BarCodeValue>{data.billDetails.barCode}</BarCodeValue>
        </BlockView>

        <ChartView>
          <ChartLegend baseColor={baseColor}>
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
          <ChartLegendBottom baseColor={baseColor}>
            <ChartLegendBottomText baseColor={baseColor}>
              {chartDataText}
            </ChartLegendBottomText>
            <ChartLegendBottomText baseColor={baseColor}>
              {chartDataValue}
            </ChartLegendBottomText>
          </ChartLegendBottom>
        </ChartView>
        <BlockView>
          <PdfButton
            disabled={!pdfAvailable}
            hasDisabledStyle={!pdfAvailable}
            baseColor={baseColor}
            onPress={onClickViewPDF}
          >
            <PdfButtonText baseColor={pdfAvailable ? baseColor : '#fff'}>
              {pdfAvailable ? 'PDF da conta' : 'PDF da conta não disponível'}
            </PdfButtonText>
          </PdfButton>
        </BlockView>

        {data.isAutomaticDebit ? (
          <BlockView>
            <AccountTypeText>
              Conta em Débito automático{' '}
              {data.automaticDebitBankName &&
                `no ${data.automaticDebitBankName}`}
            </AccountTypeText>
          </BlockView>
        ) : (
          <BlockView>
            <RowBetween>
              <AutomaticPaymentText>
                Pagamento automático no dia do vencimento
              </AutomaticPaymentText>
              <CustomSwitch
                value={paymentSwitch}
                onValueChange={(val) => handleSwitchPaymentChange(val)}
                backgroundActive={switchColors.backgroundActive}
                backgroundInactive={switchColors.backgroundInactive}
                circleActiveColor={switchColors.circleActiveColor}
                circleInActiveColor={switchColors.circleInActiveColor}
              />
            </RowBetween>
            <PaymentButtonView>
              <PaymentButton baseColor={baseColor}>
                <PaymentButtonText baseColor={baseColor}>
                  Pagar / Agendar
                </PaymentButtonText>
              </PaymentButton>
            </PaymentButtonView>
          </BlockView>
        )}

        <BlockView>
          <ButtonsWrapper withMargin={data.isAutomaticDebit}>
            <CustomButton baseColor={baseColor} onPress={onClickRejectAccount}>
              <CustomButtonText baseColor={baseColor}>
                Recusar a conta
              </CustomButtonText>
            </CustomButton>

            <CustomButtonRight
              baseColor={baseColor}
              onPress={handleViewAccountDetails}
            >
              <CustomButtonText baseColor={baseColor}>
                Ver detalhes da conta
              </CustomButtonText>
            </CustomButtonRight>
          </ButtonsWrapper>

          <PaymentHistoryLink>
            <PaymentHistoryIcon />
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
          titleColor={baseColor}
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
