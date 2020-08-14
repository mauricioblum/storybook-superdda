import React from 'react';
import { View, Button as NativeButton } from 'react-native';

export interface ButtonProps {
  name: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ name = 'Button', onPress }) => {
  return (
    <View>
      <NativeButton title={name} onPress={() => onPress && onPress()} />
    </View>
  );
};
