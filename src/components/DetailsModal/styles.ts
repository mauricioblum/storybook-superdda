import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
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
  margin: 10px 20px 20px 32px;
  background-color: #fff;
  flex: 1;
  padding-bottom: 36px;
`;

export const ModalWebContainer = styled.View`
  width: 359px;
  min-height: 530px;
  background: #fff;
  background-color: #fff;
  border-radius: 5px;
  z-index: 500;
  position: absolute;
  top: 7%;
  left: 4%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.49);

  ${(props: { mobile?: boolean; modalType?: string }) =>
    props.mobile &&
    `
    position: relative;
    top: 0;
    left: 0;
    width: 85%;
    background-color: #fff;
    min-height: 165px;
  `};
`;

export const Title = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  line-height: 24px;
  color: ${(props: { color?: string }) => props.color || '#f78c49'};
`;

export const ModalText = styled.Text`
  font-family: ${(props: { modalType?: string }) =>
    props.modalType === 'beneficiary'
      ? 'NunitoSans-Bold'
      : 'NunitoSans-Regular'};
  font-size: 15px;
  color: #727272;
`;

export const ModalTextBold = styled(ModalText)`
  font-family: 'NunitoSans-Bold';
`;

export const ModalInfoBlock = styled.View`
  margin-top: 20px;
`;

export const ModalInfoBlockLast = styled.View`
  margin-top: 20px;
`;

export const ModalInfoRow = styled.View`
  flex-direction: row;
`;
