import { Colors } from '@styles/colors';
import { label2, label3, textH2 } from '@styles/fonts';
import { spacing } from '@utils/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardPrimary,
    borderRadius: 10,
    paddingVertical: spacing.s20,
    paddingHorizontal: spacing.s30,
    marginBottom: spacing.s24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: Colors.chipPrimary,
    borderRadius: 100,
    paddingHorizontal: spacing.s11,
    paddingVertical: spacing.s3,
  },
  badgeText: {
    ...label3,
  },
  delete: {
    backgroundColor: Colors.bgPrimary,
  },
  title: {
    ...textH2,
    color: Colors.textWhite,
    marginBottom: spacing.s4,
  },
  dueDate: {
    ...label2,
  },
  doneButton: {
    backgroundColor: Colors.buttonPrimary,
    paddingVertical: 6,
    borderRadius: spacing.s4,
    alignSelf: 'flex-start',
  },
  doneText: {
    color: Colors.textWhite,
    ...label2,
    paddingHorizontal: spacing.s12,
  },
});
