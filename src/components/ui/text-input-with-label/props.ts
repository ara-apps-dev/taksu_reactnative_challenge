import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface Props extends TextInputProps {
  label: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
