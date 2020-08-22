import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { View, Text } from 'react-native';
import { Popup, PopupProps } from '../components/Popup';

export default {
  title: 'SuperDDA/Popup',
  component: Popup,
} as Meta;

const Template: Story<PopupProps> = (args) => (
  <View>
    <Text
      style={{
        fontSize: 25,
        fontFamily: 'NunitoSans-SemiBold',
        marginTop: 10,
        textAlign: 'center',
      }}
    >
      Use this to style your modals
    </Text>
    <Text
      style={{
        fontSize: 18,
        fontFamily: 'NunitoSans-Regular',
        marginTop: 10,
        textAlign: 'center',
      }}
    >
      Insert content in children
    </Text>
    <View
      style={{
        marginTop: 23,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#333',
      }}
    >
      <Popup {...args} />
    </View>
  </View>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Agendamento',
};
