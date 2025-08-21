import AsyncStorage from '@react-native-async-storage/async-storage';
import { object, string } from 'yup';

export const loginSchema = object().shape({
  name: string()
    .matches(/^[A-Za-z ]+$/, 'Name can only contain letters and spaces')
    .required('Name is required')
    .test('unique-name', 'User already exists', async value => {
      if (!value) return true;
      const savedName = await AsyncStorage.getItem('userName');
      return savedName !== value; // true if name is not saved yet
    }),
});
