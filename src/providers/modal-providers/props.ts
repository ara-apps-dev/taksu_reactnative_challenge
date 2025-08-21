import { AnimationType } from '@components/modals/custom-modal/props';
import { ReactNode } from 'react';

export interface ModalStackItem {
  id?: string;
  visible?: boolean;
  content: ReactNode;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  animation?: AnimationType;
  backgroundColor?: string;
  dimBackgroundColor?: string;
}

export interface ModalContextType {
  showModal: (
    content: ReactNode,
    options?: Omit<ModalStackItem, 'content'>,
  ) => void;
  hideModal: () => void;
  resetModal: () => void;
}
