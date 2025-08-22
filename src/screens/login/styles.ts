import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Colors } from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexCenter,
    backgroundColor: Colors.bgPrimary,
  },
  form: { gap: 20 },
});
