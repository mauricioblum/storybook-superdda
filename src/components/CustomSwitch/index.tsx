import React from 'react';
import { Switch, SwitchProps } from 'react-native-switch';

const CustomSwitch: React.FC<SwitchProps> = (props) => {
  return (
    <Switch
      disabled={false}
      circleSize={15}
      barHeight={7}
      circleBorderWidth={0}
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
      {...props}
    />
  );
};

export default CustomSwitch;
