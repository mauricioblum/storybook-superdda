import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Rect, Path, Circle } from 'react-native-svg';

export interface IconProps {
  color?: string;
  size?: number;
  testID?: string;
}

const iconStyle = {
  marginRight: 15,
};

export const MailIcon: React.FC<IconProps> = ({
  color = '#2d2d2d',
  size = 20,
  testID = 'mailIcon',
}) => {
  return (
    <View style={iconStyle} testID={testID}>
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        width={size}
        height={size}
        color={color}
        strokeWidth={1.5}
      >
        <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <Path d="M22 6l-10 7L2 6" />
      </Svg>
    </View>
  );
};

export const UserCheck: React.FC<IconProps> = ({
  color = '#009245',
  size = 16,
  testID = 'userCheck',
}) => {
  return (
    <View style={iconStyle} testID={testID}>
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        width={size}
        height={size}
        color={color}
        strokeWidth={2}
      >
        <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M17 11l2 2 4-4" />
      </Svg>
    </View>
  );
};

export const UserX: React.FC<IconProps> = ({ color = '#000', size = 16 }) => {
  return (
    <View style={iconStyle}>
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        width={size}
        height={size}
        color={color}
        strokeWidth={2}
      >
        <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M18 8l5 5M23 8l-5 5" />
      </Svg>
    </View>
  );
};

export const LightBulb: React.FC<IconProps> = ({
  color = '#999999',
  size = 22,
}) => {
  return (
    <View style={iconStyle}>
      <Svg
        fill="currentColor"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        color={color}
        strokeWidth={1.5}
      >
        <Path d="M356.883 124.529c-26.994-26.805-62.742-41.531-100.759-41.531-.346 0-.694.002-1.041.004-41.121.29-80.224 18.446-107.281 49.811-3.607 4.182-3.142 10.496 1.04 14.104 4.183 3.608 10.497 3.14 14.104-1.04 23.29-26.998 56.925-42.626 92.278-42.875.301-.002.597-.004.896-.004 32.701 0 63.453 12.668 86.673 35.724 23.436 23.27 36.343 54.274 36.343 87.3 0 31.539-11.922 61.531-33.569 84.449-22.728 24.062-36.068 54.518-38.07 86.532H288V291.005h6.333c14.521 0 26.333-11.813 26.333-26.332v-1.334c0-14.521-11.813-26.332-26.333-26.332-14.521 0-26.332 11.813-26.332 26.332v7.667h-23.999v-7.667c0-14.521-11.813-26.332-26.332-26.332h-1.694c-14.521 0-26.332 11.813-26.332 26.332v1.334c0 14.521 11.813 26.332 26.332 26.332h8.027v105.997h-19.259c-1.94-32.37-15.015-62.544-37.308-85.719-23.021-23.936-35.202-55.437-34.298-88.699.15-5.521-4.203-10.118-9.725-10.268-5.545-.188-10.117 4.203-10.268 9.725-1.051 38.661 13.11 75.277 39.876 103.106 20.619 21.436 31.974 49.953 31.974 80.3v28.937c0 21.389 16.221 39.053 37.006 41.355V478c-.001 18.748 15.251 34 33.998 34s33.999-15.252 33.999-33.999v-2.232c20.895-2.198 37.232-19.917 37.232-41.384v-28.934c0-29.949 11.675-58.804 32.873-81.247 25.169-26.645 39.03-61.515 39.03-98.183.001-38.395-15.004-74.438-42.25-101.492zM288 263.339a6.34 6.34 0 016.333-6.333 6.341 6.341 0 016.334 6.333v1.334a6.341 6.341 0 01-6.334 6.333H288v-7.667zm-43.999 27.666H268v105.997h-23.999V291.005zm-28.027-19.999a6.34 6.34 0 01-6.333-6.333v-1.334a6.34 6.34 0 016.333-6.333h1.694a6.34 6.34 0 016.333 6.333v7.667h-8.027zM270 478.001c0 7.72-6.28 14-14 14s-14-6.28-14-14v-2h28v2zm37.232-43.616c0 11.92-9.697 21.617-21.617 21.617h-59.004c-11.92 0-21.617-9.697-21.617-21.617v-17.383h102.238v17.383zM256 0c-5.522 0-10 4.478-10 10v37.344c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10V10c0-5.522-4.478-10-10-10zm216.02 216.021h-37.344c-5.522 0-10 4.478-10 10s4.478 10 10 10h37.344c5.522 0 10-4.478 10-10s-4.477-10-10-10zm-394.696 0H39.98c-5.522 0-10 4.478-10 10s4.478 10 10 10h37.344c5.522 0 10-4.478 10-10s-4.477-10-10-10zm59.403-123.415L110.322 66.2c-3.905-3.903-10.235-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l26.405 26.406c1.954 1.952 4.513 2.929 7.072 2.929s5.118-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zm279.094-26.407c-3.906-3.904-10.236-3.904-14.142 0l-26.405 26.406c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.952 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929l26.405-26.406c3.905-3.905 3.905-10.237 0-14.143z" />
        <Path d="M349.612 188.262c-7.493-18.599-20.235-34.427-36.848-45.775-16.832-11.495-36.506-17.559-56.95-17.559l-.73.002c-5.523.039-9.969 4.548-9.93 10.07.039 5.499 4.509 9.93 9.999 9.93h.071c.199-.002.394-.002.592-.002 33.297 0 62.792 19.892 75.246 50.807a10.003 10.003 0 009.278 6.267c1.244 0 2.51-.234 3.733-.728 5.123-2.064 7.603-7.891 5.539-13.012zm4.365 30.689a10.073 10.073 0 00-7.069-2.931 10.079 10.079 0 00-7.08 2.931c-1.86 1.859-2.92 4.439-2.92 7.069s1.06 5.21 2.92 7.07a10.078 10.078 0 007.08 2.93c2.63 0 5.21-1.069 7.069-2.93 1.86-1.86 2.92-4.44 2.92-7.07s-1.06-5.21-2.92-7.069zm-213.405-51.519c-1.859-1.86-4.439-2.92-7.069-2.92s-5.21 1.059-7.07 2.92a10.1 10.1 0 00-2.93 7.08c0 2.63 1.069 5.2 2.93 7.07 1.86 1.859 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93a10.094 10.094 0 002.931-7.07c0-2.64-1.07-5.21-2.931-7.08z" />
      </Svg>
    </View>
  );
};

export const ChevronLeft: React.FC<IconProps> = ({
  color = '#707070',
  size = 40,
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={size}
      height={size}
      color={color}
      strokeWidth={2}
    >
      <Path d="M15 18l-6-6 6-6" />
    </Svg>
  );
};

export const MoreVertical: React.FC<IconProps> = ({
  color = '#707070',
  size = 40,
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={size}
      height={size}
      color={color}
      strokeWidth={2}
    >
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={5} r={1} />
      <Circle cx={12} cy={19} r={1} />
    </Svg>
  );
};

export const IuPayIcon: React.FC<IconProps & { marginRight?: number }> = ({
  color = '#000',
  size = 24,
  marginRight = 10,
}) => {
  return (
    <View style={{ marginRight }}>
      <Svg
        viewBox="0 0 250 250"
        fill="currentColor"
        width={size}
        height={size}
        color={color}
        strokeWidth={1.5}
      >
        <Path d="M56.4 67.3c-.3.8-.4 4.9-.2 9.3l.3 7.9h18l.3-7c.5-11.6.6-11.5-9.4-11.5-6.1 0-8.6.4-9 1.3zm38 0c-.2.7-.3 25.1-.2 54.3l.3 52.9 2.4 5.2c2.8 6.3 9.1 12.4 15.2 14.7 3.9 1.5 8.5 1.6 39.4 1.4 31.6-.3 35.4-.5 38.7-2.1 4.9-2.5 10.3-7.9 13.1-13l2.2-4.2v-110h-18l-.5 53.2-.5 53.2-2.3 2.3c-2.3 2.3-2.3 2.3-34.2 2.3-31.9 0-31.9 0-34.2-2.3l-2.3-2.3-.5-53.2-.5-53.2-8.8-.3c-6.6-.2-8.9 0-9.3 1.1zm-37.7 34.3c-.4.4-.7 21.8-.7 47.6V196h19l-.2-47.3-.3-47.2-8.5-.3c-4.7-.1-8.9 0-9.3.4z" />
      </Svg>
    </View>
  );
};

export const CloseCircle: React.FC<IconProps> = ({
  color = '#727272',
  size = 40,
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={size}
      height={size}
      color={color}
      strokeWidth={1.5}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M15 9l-6 6M9 9l6 6" />
    </Svg>
  );
};

export const SearchIcon: React.FC<
  IconProps & { marginHorizontal?: number }
> = ({ color = '#727272', size = 16, marginHorizontal = 10 }) => {
  return (
    <View style={{ marginHorizontal }}>
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        width={size}
        height={size}
        color={color}
        strokeWidth={2.8}
      >
        <Circle cx={11} cy={11} r={8} />
        <Path d="M21 21l-4.35-4.35" />
      </Svg>
    </View>
  );
};

export const CopyIcon: React.FC<IconProps> = ({
  color = '#727272',
  size = 16,
}) => {
  return (
    <View style={{ marginLeft: 5 }}>
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={size}
        height={size}
        color={color}
      >
        <Rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
        <Path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </Svg>
    </View>
  );
};

export const PaymentHistoryIcon: React.FC<IconProps> = () => {
  return (
    <View style={{ marginRight: 6 }}>
      <Image
        style={{ width: 30, height: 30 }}
        source={{
          uri: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABHNCSVQICAgIfAhkiAAABAZJREFUeF7tnU3IDlEUx+8rwoJSooh8hQVZWLCQYmMnQllbysLCQhKxkEQKKdlYWYiytmBjwUaJhHxtlERKIfns1czr/9aMOefcO/fOvf7v6jzz/M85d35z5szcZz7eETecv9kwlMOVPUc5vNeV/gj4vVXG6EU+0ktUW1CCtnFTexG0Gtm/HabC15vAXg32Ss+cD8D/Htg3wP7kmUPlnqJ1ELRqE9nFBG1np/LcCWq0VUGM4ivgd9kYw+SWonUQtHJTLQT9UoXvRtAuU/iFkD6BIDcVAZ+C9qXCb0zqU9EErSBO0DJY0St6LozrHNg+G6xpVXdXCz/LOIypJlXWRaVfl/wXCPaAXU/5u/ydFhBBO0fQzrliKnod7CP7OvcXu6D+9e6LMsTESn9M6aeRnwTxbamjtnUQtHME7Zz7ryr6GuxODxt2rS2wbJV01wukuw9xrrfEXFEt39by/WAqmqAbtlAfPZqgI4Hu2rU2wzh2BWoJ0jCXBK2jPuC3nVV1rV/jWPqo6K6BELSgLCSndwQ9kNYxAcaxBuyZgg1tkbwHp7tg/2gJVkzrIGhBuYRoHYI0SSXFVHRSioLkBC2AFEJSDGjs0dNDkFHE+Ajan//TwZCgO7b26NfWmRMrWrALWs86pkHsU2DPEuQMKcFbeLFQsKVk3aMJWlkurOgBXWFp+q0D72Q6ody4fckPQOBHYGfdOghaWS7W1kHQkUBjmg3wYZEyv6/8BQS4VfqEhaAF5WJtHYLQg5FkfTAcDEXBQAhaACmEJGvQeBF4O9BYEoKMIsYz0F4FG2/LJWgF0DYpQQeAKAlRPOjlQOG4hEgEzUHIgfcIZt06CFpZOdbzaIKOBHoK5MF3aaScguM48KGkrFsHQbOi/xAopqKV2zOpPOvWkZScMnkxoGfAii9QQvCVv4IAH1qCEbQvZeccQQeAKAlRPGi8UeY8EKmfC5RACqH5DkHwme43sDzr1kHQyjKxTsEJOhLoeZDnrDJnX/K9EBh7d9atg6CV5WJtHQQdCTSmWQwfUl4zfF76hIWgBdVtbR2saAFclIQArUwZXZ71WUd0Wh4JCdoDnsaVoIHWerB3gD25gyje13EatN9K+a1DU1ESLUE748M0ErqgOQP2fKVvLa/frTf6GV9qxdZB0ONLqusNNMYCHOfGio7UOvDNNVuNB8ML4IcXBNg6AAxBs6KbO2OK17GF6NF9xmDr6JMuJyyR6BI0QZvfQBMfnS4je7SOl1mdDejHsIrvzKubzrF+dSc+DoKjMc18+zi9I+iGItGCXgsx9qcruqSZ8fG9O9KRELSU1F8dQeuZmTyigMZLRUdhmLH/XZ6JkIcT/nu+QxDnqzSmtnUQtHMELa0ug867on8DRATOarjMuDMAAAAASUVORK5CYII=`,
        }}
      />
    </View>
  );
};

export const BarcodeIcon: React.FC<IconProps> = ({
  color = '#000',
  size = 26,
}) => {
  return (
    <View>
      <Svg
        viewBox="0 0 480 480"
        fill="currentColor"
        stroke="currentColor"
        width={size}
        height={size}
        color={color}
      >
        <Path d="M80 48H16C7.168 48 0 55.168 0 64v64c0 8.832 7.168 16 16 16s16-7.168 16-16V80h48c8.832 0 16-7.168 16-16s-7.168-16-16-16zm384 288c-8.832 0-16 7.168-16 16v48h-48c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16v-64c0-8.832-7.168-16-16-16zm0-288h-64c-8.832 0-16 7.168-16 16s7.168 16 16 16h48v48c0 8.832 7.168 16 16 16s16-7.168 16-16V64c0-8.832-7.168-16-16-16zM80 400H32v-48c0-8.832-7.168-16-16-16s-16 7.168-16 16v64c0 8.832 7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM64 112h32v256H64zm64 0h32v192h-32zm64 0h32v192h-32zm64 0h32v256h-32zm64 0h32v192h-32zm64 0h32v256h-32zM128 336h32v32h-32zm64 0h32v32h-32zm128 0h32v32h-32z" />
      </Svg>
    </View>
  );
};

export const LockIcon: React.FC<IconProps> = ({
  color = '#e50914',
  size = 26,
  testID = 'lockIcon',
}) => {
  return (
    <View testID={testID}>
      <Svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        color={color}
      >
        <Rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
        <Path d="M7 11V7a5 5 0 0110 0v4" />
      </Svg>
    </View>
  );
};
