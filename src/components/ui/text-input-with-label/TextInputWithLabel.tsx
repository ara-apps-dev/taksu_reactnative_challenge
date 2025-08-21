import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { Props } from './props';

export default function TextInputWithLabel({
  label,
  containerStyle,
  ...props
}: Props) {
  const appStyles = styles;
  return (
    <View style={[appStyles.container, containerStyle]}>
      <Text style={appStyles.label}>{label}</Text>
      <TextInput
        style={appStyles.input}
        placeholderTextColor="#B0B0B0"
        {...props}
      />
    </View>
  );
}
