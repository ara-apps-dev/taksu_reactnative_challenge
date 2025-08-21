import { Colors } from '@styles/colors';
import { label2, textH3 } from '@styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    marginBottom: 4,
    ...textH3,
  },
  input: {
    minHeight: 56,
    backgroundColor: Colors.cardPrimary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    ...label2,
  },
});
