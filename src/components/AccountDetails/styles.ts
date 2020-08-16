import styled from 'styled-components/native';

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
  color: #f78c49;
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
  background-color: #727272;
  align-items: center;
  justify-content: center;
`;

export const ViewAccountDetailsButtonText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: #ffffff;
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

export const BarCodeTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  color: #727272;
  line-height: 22px;
`;

export const BarCodeValue = styled(BarCodeTitle)`
  font-size: 13px;
`;

export const AccountTypeText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 16px;
  color: #727272;
`;

export const ButtonsWrapper = styled.View`
  margin-top: 59px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const CustomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  display: flex;
  flex: 1;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #727272;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

export const CustomButtonRight = styled(CustomButton)`
  margin-right: 0;
`;

export const CustomButtonText = styled(ViewAccountDetailsButtonText)`
  font-size: 14px;
`;

export const PaymentHistoryLink = styled.TouchableOpacity`
  margin-top: 14px;
`;

export const PaymentHistoryLinkText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 13px;
  line-height: 16px;
  text-decoration: underline;
  text-decoration-color: #727272;
  color: #727272;
`;

