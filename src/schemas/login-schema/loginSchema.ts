import { object, string } from 'yup';

export const loginSchema = object().shape({
  name: string()
    .matches(/^[A-Za-z ]+$/, 'Name can only contain letters and spaces')
    .required('Name is required'),
});
