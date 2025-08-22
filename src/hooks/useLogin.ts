import { LoginNavigationProp, RootStackRoutes } from '@navigation/RootRoutes';
import { useNavigation } from '@react-navigation/native';
import { UsersStore } from 'mobx/stores/UserStore';
import { useLocalObservable } from 'mobx-react-lite';
import { onSnapshot } from 'mobx-state-tree';
import { useMemo } from 'react';
import { logMessage } from '@utils/logger';

export const useLogin = () => {
  const { replace } = useNavigation<LoginNavigationProp>();
  const userStore = useLocalObservable(() => UsersStore.create({ users: [] }));

  useMemo(() => {
    userStore.loadUsers();
  }, [userStore]);

  onSnapshot(userStore, snapshot => {
    logMessage('User snapshot:', snapshot);
  });

  const goToHome = () => {
    replace(RootStackRoutes.Home);
  };

  return { userStore, goToHome };
};
