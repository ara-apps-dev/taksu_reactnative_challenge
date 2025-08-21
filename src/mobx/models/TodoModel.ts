import { types } from 'mobx-state-tree';

export const TodoModel = types.model('Todo', {
  id: types.identifier,
  title: types.string,
  isDone: types.boolean,
  dueDate: types.string,
  userName: types.string,
});
