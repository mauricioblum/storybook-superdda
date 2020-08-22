import styled from 'styled-components/native';

export const Container = styled.View`
  min-width: 359px;
  min-height: 230px;
  background: #fff;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 41px;
  padding: 11px 11px 11px 27px;
  background-color: #f7f5f4;
  justify-content: center;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ModalRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const ModalTitle = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  color: #727272;
`;

export const ModalContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 20px 20px 20px;
  background-color: #fff;
  flex: 1;
  padding-bottom: 36px;
`;
