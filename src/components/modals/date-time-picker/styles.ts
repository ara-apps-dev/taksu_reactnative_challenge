import { StyleSheet } from 'react-native';
import { spacing } from '@utils/spacing';
import { Colors } from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
    padding: spacing.s24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.s16,
  },
  button: {
    flex: 1,
    marginHorizontal: spacing.s8,
    justifyContent: 'center',
  },
});
