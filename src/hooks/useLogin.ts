import { LoginNavigationProp, RootStackRoutes } from '@navigation/RootRoutes';
import { useNavigation } from '@react-navigation/native';
import { UserModel } from '@stores/models/UserModel';
import { useLocalObservable } from 'mobx-react-lite';
import { onSnapshot } from 'mobx-state-tree';
import { useMemo } from 'react';

export const useLogin = () => {
  const { navigate } = useNavigation<LoginNavigationProp>();
  const userStore = useLocalObservable(() => UserModel.create());

  useMemo(() => {
    userStore.loadName();
  }, [userStore]);

  onSnapshot(userStore, snapshot => {
    console.log('User snapshot:', snapshot);
  });

  const goToHome = () => {
    navigate(RootStackRoutes.Home);
  };

  return { userStore, goToHome };
};
