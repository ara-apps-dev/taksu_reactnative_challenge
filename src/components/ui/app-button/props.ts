import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'success' | 'accent';

export interface Props {
  title: string;
  trailing?: ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
}
