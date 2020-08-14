import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  background: #fff;
`;

export const TabContainer = styled.View`
  padding: 0 24px;
  flex-direction: row;
`;

export const TabButton = styled.TouchableOpacity<{ active: boolean }>`
  height: 46px;
  padding: 6px 14px;
  background: ${(props) => (props.active ? '#fddcc8' : '#fff')};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const TabText = styled.Text<{ active: boolean }>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.active ? '#f78c49' : '#999999')};
`;
