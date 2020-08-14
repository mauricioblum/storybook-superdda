import styled from 'styled-components/native';

interface CustomProps {
  color?: string;
  isDue?: number;
}

export const Container = styled.View`
  border-radius: 8px;
  background-color: #ffffff;
  width: 100%;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
`;

export const Bar = styled.View<CustomProps>`
  width: 8px;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${(props): string => props.color || '#d71921'};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px;
`;

export const CardHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.View`
  margin-top: 14px;
`;

export const CardFooter = styled(CardHeader)`
  margin-top: 9px;
`;

export const CardIcons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100px;
`;

export const CardTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: #727272;
  margin-left: 11px;
`;

export const Logo = styled.Image``;

export const DueDateText = styled.Text<CustomProps>`
  font-family: ${(props): string =>
    props.isDue === 1 ? 'NunitoSans-Bold' : 'NunitoSans-SemiBold'};
  font-size: ${(props): string => (props.isDue ? '14px' : '13px')};
  line-height: 17px;
  color: ${(props): string => (props.isDue ? '#e30613' : '#7a7a7b')};
`;

export const BetweenRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  min-height: 18px;
`;

export const CnpjText = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  text-align: left;
  color: #727272;
`;

export const PaidText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: #8aa626;
`;

export const CardText = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 13px;
  line-height: 14px;
  text-align: left;
  color: #727272;
  min-height: 18px;
`;

export const MailIcon = styled.Image`
  width: 20px;
  height: 15px;
  margin-right: 5px;
`;

export const CardValue = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CurrencyText = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 13px;
  line-height: 16px;
  text-align: right;
  color: #7a7a7b;
  margin-right: 2px;
`;

export const ValueText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 17px;
  font-weight: bold;
  line-height: 16px;
  text-align: right;
  color: #7a7a7b;
`;
