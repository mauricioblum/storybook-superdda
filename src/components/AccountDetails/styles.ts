import styled from 'styled-components/native';
import { transparentize } from 'polished';

interface StyledProps {
  baseColor: string;
  hasDisabledStyle?: boolean;
}

export const WrapperView = styled.View`
  width: 100%;
  position: relative;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1px 0px 1px;
`;

export const BackButton = styled.TouchableOpacity``;

export const OptionsButton = styled.TouchableOpacity``;

export const Logo = styled.Image`
  width: 66px;
  height: 33px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1px 10px 15px;
  min-height: 25px;
`;

export const Title = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  line-height: 24px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BlockView = styled.View`
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const InfoBlock = styled.View`
  flex-direction: row;
`;

export const ValueTitle = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 15px;
  color: #727272;
`;

export const ValueTitleBold = styled(ValueTitle)`
  font-family: 'NunitoSans-Bold';
`;

export const ViewAccountDetailsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border: ${(props: StyledProps) => `2px solid ${props.baseColor}`};

  ${(props: StyledProps) =>
    props.hasDisabledStyle &&
    `
    border: 0;
    background-color: #e8e8e8;
  `}
`;

export const ViewAccountDetailsButtonText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const PdfButton = styled(ViewAccountDetailsButton)``;
export const PdfButtonText = styled(ViewAccountDetailsButtonText)``;

export const PaymentHistoryItem = styled.View`
  width: 100%;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.58);
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BarCodeTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  color: #727272;
  line-height: 22px;
`;

export const CopyButton = styled.TouchableOpacity``;

export const BarCodeValue = styled(BarCodeTitle)`
  font-size: 13px;
`;

export const AccountTypeText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 16px;
  color: #727272;
`;

export const ButtonsWrapper = styled.View`
  margin-top: ${(props: { withMargin: boolean | undefined }) =>
    props.withMargin ? '59px' : '0px'};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props: { withMargin: boolean | undefined }) =>
    props.withMargin ? '26px' : '10px'};
`;

export const CustomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  display: flex;
  flex: 1;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
  border: ${(props: StyledProps) => `2px solid ${props.baseColor}`};
`;

export const CustomButtonRight = styled(CustomButton)`
  margin-right: 0;
`;

export const CustomButtonText = styled(ViewAccountDetailsButtonText)`
  font-size: 13px;
`;

export const PaymentHistoryLink = styled.TouchableOpacity`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PaymentHistoryLinkText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 13px;
  line-height: 16px;
  text-decoration: underline;
  text-decoration-color: #727272;
  color: #727272;
`;

export const ChartView = styled.View`
  margin: 16px 0;
`;

export const ChartLegend = styled.View`
  width: 100%;
  height: 40px;
  background: ${(props: StyledProps) => props.baseColor};
  padding-left: 25px;
  padding-top: 19px;
`;

export const ChartLegendText = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 14px;
  color: #ffffff;
`;

export const ChartLegendBottom = styled.View`
  height: 35px;
  background-color: ${(props: StyledProps) =>
    `${transparentize(0.7, props.baseColor)}`};
  padding: 8px 26px;
  padding-left: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChartLegendBottomText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 14px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const AutomaticPaymentText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: #727272;
`;

export const PaymentButton = styled(CustomButtonRight)`
  background: ${(props: StyledProps) => props.baseColor};
`;

export const PaymentButtonText = styled(CustomButtonText)`
  font-family: 'NunitoSans-Bold';
  color: #fff;
  font-size: 16px;
`;

export const PaymentButtonView = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
