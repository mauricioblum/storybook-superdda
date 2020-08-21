import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: ${(props: { bgColor?: string }) =>
    props.bgColor || 'transparent'};
`;

export const ChildrenWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TotalPaymentText = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export const TotalPaymentTextValue = styled(TotalPaymentText)`
  font-family: 'NunitoSans-Bold';
`;
