import styled from 'styled-components/native';

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

export const ValueDescription = styled(ValueTitle)`
  font-family: 'NunitoSans-Bold';
`;

export const ValueActive = styled.Text.attrs({
  textDecorationStyle: 'solid',
})`
  font-family: 'NunitoSans-Bold';
  text-decoration: underline;
  text-decoration-color: ${(props: StyledProps) => props.baseColor};
  font-size: 15px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const CardHolderContainer = styled.View`
  width: 100%;
  background: ${(props: StyledProps) => props.baseColor};
  padding: 16px;
  margin-bottom: 15px;
`;

export const CardHolderCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: #fffefe;
  padding: 8px 17px;
`;

export const CardHolderText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: #727272;
  line-height: 22px;
`;

export const CardHolderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const CardHolderButtonText = styled(CardHolderText)`
  margin-top: 2px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const ViewBeneficiaryDetailsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #727272;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: ${(props: StyledProps) => `2px solid ${props.baseColor}`};

  ${(props: StyledProps) =>
    props.hasDisabledStyle &&
    `
    border: 0;
    background-color: #e8e8e8;
  `}
`;

export const ViewBeneficiaryDetailsButtonText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: ${(props: StyledProps) => props.baseColor};
`;

export const PaymentHistoryContainer = styled.View`
  width: 100%;
  background: #f7f5f4;
  margin-top: 10px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const PaymentHistoryRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
`;

export const PaymentHistoryTitle = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 15px;
  color: #727272;
`;

export const PaymentHistoryData = styled.ScrollView`
  margin-top: 15px;
`;

export const PaymentHistoryItem = styled.View`
  width: 100%;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.58);
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PaymentMonthWrapper = styled.View``;

export const PaymentMonth = styled(PaymentHistoryTitle)`
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

export const PaymentOpenStatus = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 13px;
  color: #707070;
  margin: 0;
  padding: 0;
`;

export const PaymentValueInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PaymentCurrency = styled(PaymentHistoryTitle)`
  font-size: 11px;
  padding: 0;
`;

export const PaymentValue = styled(PaymentHistoryTitle)`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  padding: 0;
`;
