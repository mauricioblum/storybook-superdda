import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  background-color: #fddcc8;
  width: 100%;
  max-height: 33px;
`;

export const MonthButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<{ current?: boolean }>`
  background-color: ${(props) => (props.current ? '#f78c49' : '#fddcc8')};
  width: 80px;
  height: 33px;
  justify-content: center;
  align-items: center;
`;

export const MonthText = styled.Text<{ current?: boolean }>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.current ? '#fff' : '#f78c49')};
`;
