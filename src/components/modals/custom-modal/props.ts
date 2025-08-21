export type AnimationType = 'zoom' | 'slideUp' | 'slideDown' | 'slideLeft';

export interface Props {
  visible: boolean;
  children: React.ReactNode;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  onRequestClose: () => void;
  onDidClose?: () => void;
  onClose: () => void;
  animation?: AnimationType;
  backgroundColor?: string;
  dimBackgroundColor?: string;
}
