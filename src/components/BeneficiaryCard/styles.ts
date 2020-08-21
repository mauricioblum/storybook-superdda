import styled from 'styled-components/native';

interface CustomProps {
  color?: string;
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
  margin-top: 10px;
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

export const CardTitle = styled.Text<CustomProps>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 14px;
  color: ${(props) => props.color || '#727272'};
  margin-left: 11px;
`;

export const Logo = styled.Image``;

export const CardTypeText = styled.Text<CustomProps>`
  font-family: 'NunitoSans-Bold';
  font-size: 13px;
  color: ${(props) => props.color || '#727272'};
`;

export const BetweenRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  min-height: 18px;
`;

export const CnpjText = styled.Text<CustomProps>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  text-align: left;
  color: ${(props) => props.color || '#727272'};
`;

export const CardInfoBlock = styled.View`
  min-width: 220px;
`;

export const CardText = styled.Text<CustomProps>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 12px;
  line-height: 13px;
  color: ${(props) => props.color || '#727272'};
`;

export const LimitValueText = styled(CardText)`
  font-size: 11px;
`;
