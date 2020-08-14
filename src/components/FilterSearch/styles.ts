import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LetterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-right: 5px;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const LettersText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 16px;
  font-weight: 800;
  color: #727272;
`;

export const OrderText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: #727272;
  margin-right: 5px;
`;
