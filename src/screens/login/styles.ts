import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexCenter,
    backgroundColor: '#36393F',
  },
  form: { gap: 20 },
  errorText: { color: 'red', marginTop: 0 },
});
