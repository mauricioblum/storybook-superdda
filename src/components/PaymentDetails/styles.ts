import styled from 'styled-components/native';
import { transparentize } from 'polished';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 0px 0px 0px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: auto;
`;

export const HeaderTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  color: #727272;
  margin-right: auto;
`;

export const Content = styled.View`
  margin-top: 36px;
`;

export const BlockView = styled.View`
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const BlockLabel = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 13px;
  line-height: 20px;
  color: #727272;
`;

export const BlockValue = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  line-height: 20px;
  color: #727272;
  text-transform: uppercase;
  max-width: 236px;
`;

export const BarcodeValue = styled(BlockValue)`
  font-size: 13px;
  line-height: 13px;
  max-width: 100%;
`;

export const ValueWrapper = styled.View`
  width: 100%;
  background-color: ${(props: { baseColor?: string }) =>
    transparentize(0.75, props.baseColor || '#f78c49') || '#fddbc6'};
  padding: 15px 24px 12px 24px;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
`;

export const Value = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 18px;
  line-height: 22px;
  color: ${(props: { baseColor?: string }) => props.baseColor || '#f78c49'};
`;

export const ValueLabel = styled(Value)`
  font-family: 'NunitoSans-Regular';
  font-size: 15px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 15px;
  color: #727272;
`;

export const DefaultValue = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: #727272;
`;

export const TypeValue = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: ${(props: { baseColor?: string }) => props.baseColor || '#f78c49'};
`;

export const ConfirmPaymentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  border-radius: 8px;
  background-color: ${(props: { baseColor?: string }) =>
    props.baseColor || '#f78c49'};
  margin-top: 100px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  padding: 9px 15px;
`;

export const ConfirmPaymentButtonText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 16px;
  color: #ffffff;
`;
