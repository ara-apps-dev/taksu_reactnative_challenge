import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './props';
import { globalStyles } from '@styles/global';

export default function AppButton({
  title,
  trailing,
  onPress,
  variant = 'primary',
  style,
}: Props) {
  const appStyles = styles;
  return (
    <TouchableOpacity
      style={[appStyles.base, globalStyles.rowBetween, appStyles[variant], style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={appStyles.text}>{title}</Text>
      {trailing}
    </TouchableOpacity>
  );
}
