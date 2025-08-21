import { types, flow, cast } from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodoModel = types.model('Todo', {
  id: types.identifier,
  title: types.string,
  isDone: types.boolean,
  dueDate: types.string,
  userName: types.string,
});

export const TodoStore = types
  .model('TodoStore', {
    todos: types.array(TodoModel),
  })
  .actions(self => ({
    // Add new todo
    addTodo(title: string, isDone: boolean, dueDate: string, userName: string) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        isDone,
        dueDate,
        userName,
      };
      self.todos.push(newTodo); // MST array, push is fine
      this.saveTodos();
    },

    // Remove todo by id
    removeTodo(id: string) {
      // TypeScript-safe way: cast self.todos to any to access remove/find
      const todo = (self.todos as any).find((t: any) => t.id === id);
      if (todo) (self.todos as any).remove(todo);
      this.saveTodos();
    },

    // Update todo by id
    updateTodo(id: string, title?: string, dueDate?: string, status?: string) {
      const todo = (self.todos as any).find((t: any) => t.id === id);
      if (todo) {
        if (title !== undefined) todo.title = title;
        if (dueDate !== undefined) todo.dueDate = dueDate;
        if (status !== undefined) todo.status = status;
        this.saveTodos();
      }
    },

    // Persist todos to AsyncStorage
    saveTodos: flow(function* () {
      try {
        yield AsyncStorage.setItem('todos', JSON.stringify(self.todos));
      } catch (e) {
        console.error('Failed to save todos', e);
      }
    }),

    // Load todos from AsyncStorage
    loadTodos: flow(function* () {
      try {
        const saved = yield AsyncStorage.getItem('todos');
        if (saved) {
          const parsed = JSON.parse(saved);
          self.todos = cast(parsed);
        }
      } catch (e) {
        console.error('Failed to load todos', e);
      }
    }),
  }));
