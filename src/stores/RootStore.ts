import { types, onSnapshot } from 'mobx-state-tree';
import { TodoStore } from './models/TodoModel';
import { UserModel } from './models/UserModel';

export const RootStore = types.model('RootStore', {
  user: UserModel,
  todo: TodoStore,
});

export const rootStore = RootStore.create({
  user: {},
  todo: { todos: [] },
});

onSnapshot(rootStore, snapshot => {
  // Optional: logging snapshot
  console.log('Snapshot:', snapshot);
});
