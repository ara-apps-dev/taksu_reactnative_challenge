import { Colors } from '@styles/colors';
import { spacing } from '@utils/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
    padding: spacing.s24,
  },
  header: {
    color: Colors.textWhite,
    marginBottom: 22,
  },
  buttonContainer: { alignItems: 'center' },
  button: {
    minHeight: 40,
    width: 179,
    justifyContent: 'center',
  },
});
