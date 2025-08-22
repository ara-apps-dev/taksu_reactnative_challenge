import { IconName } from '@assets/icons';
import { ViewStyle } from 'react-native';

export type AppPulseButtonProps = {
  icon?: IconName;
  iconSize?: number;
  iconColor?: string;
  size?: number;
  radius?: number;
  containerStyle?: ViewStyle;
  containerPadding?: number;
  onPress: () => void;
  disableAnimation?: boolean;
};
