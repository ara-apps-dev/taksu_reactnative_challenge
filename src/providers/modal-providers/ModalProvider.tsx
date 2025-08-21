import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { InteractionManager } from 'react-native';
import { ModalContextType, ModalStackItem } from './props';
import { CustomModal } from '@components/modals/custom-modal/CustomModal';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const id = Date.now().toString(); // unique ID
  const [modalStack, setModalStack] = useState<ModalStackItem[]>([]);
  const [interacted, setInteracted] = useState(false);
  const [isModalOpening, setIsModalOpening] = useState(false);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setInteracted(true);
    });
    return () => task.cancel();
  }, []);

  const showModal: ModalContextType['showModal'] = (
    content,
    options?: Omit<ModalStackItem, 'id' | 'content' | 'visible'>,
  ) => {
    if (isModalOpening) {
      return;
    }

    setIsModalOpening(true);
    setTimeout(() => {
      setIsModalOpening(false);
    }, 300);

    setModalStack(prev => [
      ...prev,
      {
        id,
        visible: true,
        content,
        marginHorizontal: options?.marginHorizontal ?? 20,
        marginVertical: options?.marginVertical ?? 20,
        paddingHorizontal: options?.paddingHorizontal ?? 0,
        paddingVertical: options?.paddingVertical ?? 20,
        animation: options?.animation || 'zoom',
        backgroundColor: options?.backgroundColor,
        dimBackgroundColor: options?.dimBackgroundColor,
      },
    ]);
  };

  const hideModal = () => {
    setModalStack(prev => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;
      if (lastIndex >= 0) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          visible: false,
        };
      }
      return updated;
    });
  };

  const removeTopModal = () => {
    setModalStack(prev => prev.slice(0, -1));
  };

  const resetModal = () => {
    setModalStack([]);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, resetModal }}>
      {children}
      {interacted &&
        modalStack.map((modal, index) => {
          const isTopMost = index === modalStack.length - 1;
          return (
            <CustomModal
              key={`modal-${modal?.id}`}
              visible={modal.visible !== false}
              animation={modal.animation}
              onRequestClose={() => {
                if (isTopMost) {
                  hideModal();
                }
              }}
              onClose={() => {
                // optional hook
              }}
              onDidClose={() => {
                if (isTopMost) {
                  removeTopModal();
                }
              }}
              marginHorizontal={modal.marginHorizontal}
              marginVertical={modal.marginVertical}
              paddingHorizontal={modal.paddingHorizontal}
              paddingVertical={modal.paddingVertical}
              backgroundColor={modal.backgroundColor}
              dimBackgroundColor={modal.dimBackgroundColor}
            >
              {modal.content}
            </CustomModal>
          );
        })}
    </ModalContext.Provider>
  );
};

export const useGlobalModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useGlobalModal must be used within ModalProvider');
  }
  return ctx;
};
