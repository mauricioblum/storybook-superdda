import styled from 'styled-components/native';

interface CustomProps {
  color?: string;
  isDue?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  border-radius: 8px;
  background-color: #ffffff;
  width: 100%;
  flex-direction: row;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.46);
  margin-bottom: -10px;
`;

export const Bar = styled.View<CustomProps>`
  width: 8px;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${(props): string => props.color || '#d71921'};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px;
  padding-bottom: 25px;
`;

export const CardRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  width: 70px;
  height: 50px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Logo = styled.Image`
  max-width: 100%;
  max-height: 100%;
`;

export const CardTitle = styled.Text<{ color?: string }>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 12px;
  color: ${(props) => props.color || '#707070'};
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const CardInfo = styled.View``;

export const DueDateText = styled.Text<CustomProps>`
  font-family: ${(props): string =>
    props.isDue ? 'NunitoSans-Bold' : 'NunitoSans-SemiBold'};
  font-size: ${(props): string => (props.isDue ? '14px' : '11px')};
  line-height: 17px;
  color: ${(props): string => (props.isDue ? '#e30613' : '#7a7a7b')};
`;

export const ValueText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 14px;
  color: #7a7a7b;
  line-height: 17px;
  text-align: right;
`;
