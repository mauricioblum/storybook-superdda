import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Switch } from 'react-native-switch';
import type { StyleProp, ViewStyle } from 'react-native';
import NumberFormat from 'react-number-format';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitleContainer,
  CardTitle,
  Logo,
  CardTypeText,
  CardInfoBlock,
  CardText,
  LimitValueText,
  CnpjText,
  BetweenRow,
} from './styles';

type CardType = 'Account' | 'Monthly';

export interface BeneficiaryCardProps {
  isActive: boolean;
  barColor?: string;
  cardTitle?: string;
  cardTextColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  cnpj?: string;
  imageWidth?: number;
  imageHeight?: number;
  limitValue?: number;
  limitValueText?: string;
  logo?: string;
  text?: string;
  type?: CardType;
  onSwitchChange?: (value: boolean) => void;
  switchStyle?: {
    backgroundActive: string;
    backgroundInactive: string;
    circleActiveColor: string;
    circleInActiveColor: string;
  };
}

export const BeneficiaryCard: React.FC<BeneficiaryCardProps> = ({
  barColor,
  cardTitle,
  cardTextColor,
  children,
  containerStyle,
  cnpj,
  isActive,
  logo,
  limitValue,
  limitValueText = 'Valor Limite',
  imageWidth,
  imageHeight,
  text,
  type,
  onSwitchChange,
  switchStyle,
}) => {
  const logoStyle = {
    width: imageWidth || 90,
    height: imageHeight || 30,
  };
  const [isEnabled, setIsEnabled] = useState(isActive);

  const handleSwitchChange = useCallback(
    (value: boolean) => {
      setIsEnabled(value);
      onSwitchChange && onSwitchChange(value);
    },
    [onSwitchChange],
  );

  const cardTypeText = useMemo(() => {
    return type === 'Account' ? 'Conta' : 'Mensalidade';
  }, [type]);

  const switchColors = useMemo(() => {
    return (
      switchStyle || {
        backgroundActive: '#f9a06d',
        backgroundInactive: '#b3b3b3',
        circleActiveColor: '#f78733',
        circleInActiveColor: '#717171',
      }
    );
  }, [switchStyle]);

  useEffect(() => {
    setIsEnabled(isActive);
  }, [isActive]);

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <CardTitleContainer>
            {logo && (
              <Logo
                style={logoStyle}
                source={{ uri: logo }}
                resizeMode="contain"
                resizeMethod="resize"
              />
            )}
            <CardTitle color={cardTextColor}>{cardTitle}</CardTitle>
          </CardTitleContainer>
          <CardTypeText color={cardTextColor}>{cardTypeText}</CardTypeText>
        </CardHeader>
        <CardBody>
          <BetweenRow>
            {cnpj && <CnpjText color={cardTextColor}>CNPJ: {cnpj}</CnpjText>}
          </BetweenRow>
        </CardBody>
        <CardFooter>
          <CardInfoBlock>
            <CardText style={{ color: cardTextColor }}>{text}</CardText>
            <NumberFormat
              value={limitValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <LimitValueText color={cardTextColor}>
                  {`${limitValueText}: R$${number}`}
                </LimitValueText>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
            {children}
          </CardInfoBlock>
          <Switch
            value={isEnabled}
            onValueChange={(val) => handleSwitchChange(val)}
            disabled={false}
            circleSize={15}
            barHeight={7}
            circleBorderWidth={0}
            backgroundActive={switchColors.backgroundActive}
            backgroundInactive={switchColors.backgroundInactive}
            circleActiveColor={switchColors.circleActiveColor}
            circleInActiveColor={switchColors.circleInActiveColor}
            changeValueImmediately
            innerCircleStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }} // style for inner animated circle for what you (may) be rendering inside the circle
            outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={false}
            renderInActiveText={false}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={0}
          />
        </CardFooter>
      </Content>
    </Container>
  );
};
