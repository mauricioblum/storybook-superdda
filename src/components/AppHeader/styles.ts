import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 13px 16px;
  position: relative;
`;

export const AppTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  color: ${(props: { color?: string }) => props.color || '#f78c49'};
  margin-left: auto;
  margin-right: auto;
`;

export const AppButtonsWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  right: 16px;
  top: 9px;
`;

export const AppButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 26.7px;
  height: 26.7px;
`;
