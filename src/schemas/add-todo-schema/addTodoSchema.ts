import { object, string } from 'yup';

export const addTodoSchema = object().shape({
  title: string().required('Title is required'),
  dueDate: string().required('Due date is required'),
});
