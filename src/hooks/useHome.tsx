import { HomeNavigationProp, RootStackRoutes } from '@navigation/RootRoutes';
import { useNavigation } from '@react-navigation/native';
import { TodoStore } from 'mobx/stores/TodoStore';
import { UsersStore } from 'mobx/stores/UserStore';
import { useLocalObservable } from 'mobx-react-lite';
import { onSnapshot } from 'mobx-state-tree';
import { useMemo } from 'react';
import { AddTodo } from '@components/modals/add-todo/AddTodo';
import { useGlobalModal } from '@providers/modal-providers/ModalProvider';
import { logMessage } from '@utils/logger';
import { spacing } from '@utils/spacing';

export const useHome = () => {
  const { replace } = useNavigation<HomeNavigationProp>();

  const userStore = useLocalObservable(() => UsersStore.create({ users: [] }));
  const todoStore = useLocalObservable(() => TodoStore.create({ todos: [] }));

  const { showModal, hideModal } = useGlobalModal();

  useMemo(() => {
    userStore.loadUsers();
  }, [userStore]);

  useMemo(() => {
    todoStore.loadTodos();
  }, [todoStore]);

  onSnapshot(userStore, snapshot => {
    logMessage('User snapshot:', snapshot);
  });

  onSnapshot(todoStore, snapshot => {
    logMessage('Todo snapshot:', snapshot);
  });

  const onAddTodo = () => {
    showModal(
      <AddTodo
        onSave={(title: string, dueDate: string) => {
          todoStore.addTodo(
            title,
            false,
            dueDate,
            `${userStore.currentUser?.name}`,
          );
          hideModal();
        }}
        onCancel={hideModal}
      />,
      {
        id: 'AddTodoModel',
        paddingVertical: 0,
        marginHorizontal: spacing.s32,
        animation: 'slideUp',
      },
    );
  };

  const onLogout = () => {
    userStore.logout();
    replace(RootStackRoutes.Login);
  };

  return { userStore, todoStore, onAddTodo, onLogout };
};
