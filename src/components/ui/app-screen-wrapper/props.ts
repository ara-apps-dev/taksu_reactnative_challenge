import { ViewStyle } from 'react-native';

export interface Props {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  statusBarBg?: string;
  hideStatusBar?: boolean;
  contentPadding?: number;
  contentStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  scrollable?: boolean;
  showsVerticalScrollIndicator?: boolean;
  disableSafeArea?: boolean;
  translucentStatusBar?: boolean;
}
