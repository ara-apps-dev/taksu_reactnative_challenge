import AsyncStorage from '@react-native-async-storage/async-storage';
import { flow, types } from 'mobx-state-tree';
import { TodoModel } from 'mobx/models/TodoModel';

// Helper to save data into AsyncStorage
const persistTodos = async (todos: (typeof TodoModel.Type)[]) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos', e);
  }
};

// Helper to load data from AsyncStorage
const loadPersistedTodos = async () => {
  try {
    const saved = await AsyncStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load todos', e);
  }
  return [];
};

export const TodoStore = types
  .model('TodoStore', {
    todos: types.array(TodoModel),
  })
  .views(self => ({
    getTodoStatus(todo: typeof TodoModel.Type) {
      const now = new Date();
      const due = new Date(todo.dueDate);
      if (todo.isDone) return 'DONE';
      if (due < now) return 'OVERDUE';
      return 'OPEN';
    },
    // get todos by username
    getTodosByUser(userName: string) {
      return self.todos.filter(todo => todo.userName === userName);
    },
  }))
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
      self.todos.push(newTodo);
      persistTodos(self.todos.slice());
    },

    // Remove todo by id
    removeTodo(id: string) {
      self.todos.replace(self.todos.filter(todo => todo.id !== id));
      persistTodos(self.todos.slice());
    },

    // Mark Done
    markDone(id: string) {
      const todo = self.todos.find(t => t.id === id);
      if (todo) {
        todo.isDone = true;
        persistTodos(self.todos);
      }
    },

    // Update todo by id
    updateTodo(id: string, title?: string, dueDate?: string, status?: string) {
      const todo = (self.todos as any).find((t: any) => t.id === id);
      if (todo) {
        if (title !== undefined) todo.title = title;
        if (dueDate !== undefined) todo.dueDate = dueDate;
        if (status !== undefined) todo.status = status;
      }
      persistTodos(self.todos.slice());
    },

    // Load todos from AsyncStorage
    loadTodos: flow(function* () {
      const savedTodos = yield loadPersistedTodos();
      if (savedTodos && Array.isArray(savedTodos)) {
        self.todos.replace(savedTodos.map(t => TodoModel.create(t)));
      }
    }),
  }));
