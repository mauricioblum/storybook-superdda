import styled from 'styled-components/native';
import { transparentize } from 'polished';

interface StyledProps {
  baseColor?: string;
  hasDisabledStyle?: boolean;
}

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

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`;

export const HeaderImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  color: #727272;
`;

export const Content = styled.View`
  margin-top: 36px;
`;

export const BlockView = styled.View`
  margin-bottom: 22px;
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

export const ValueWrapper = styled.View`
  width: 100%;
  background-color: ${(props: { baseColor?: string }) =>
    transparentize(0.75, props.baseColor || '#f78c49') || '#fddbc6'};
  padding: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
`;

export const ValueLabel = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 18px;
  line-height: 14px;
  color: ${(props: { baseColor?: string }) => props.baseColor || '#f78c49'};
`;

export const ViewReceiptButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  border-radius: 8px;
  border-color: ${(props: StyledProps) => props.baseColor || '#f78c49'};
  border-width: 2px;
  margin-top: 40px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  padding: 9px 15px;
  background-color: #fefefe;

  ${(props: StyledProps) =>
    props.hasDisabledStyle &&
    `
    border-color: #e8e8e8;
    background-color: #e8e8e8;
  `}
`;

export const ViewReceiptButtonText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 16px;
  color: ${(props: StyledProps) => props.baseColor || '#f78c49'};

  ${(props: StyledProps) =>
    props.hasDisabledStyle &&
    `
    color: #fff;
  `}
`;
