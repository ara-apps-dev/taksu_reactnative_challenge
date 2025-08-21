import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { Props } from './props';
import { label3 } from '@styles/fonts';
import { globalStyles } from '@styles/global';

export default function TextInputWithLabel({
  label,
  containerStyle,
  error,
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
      {error && (
        <Text style={{ ...label3, ...globalStyles.errorText }}>{error}</Text>
      )}
    </View>
  );
}
