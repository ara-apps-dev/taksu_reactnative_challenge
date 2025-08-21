import { label2, textH3 } from '@styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    marginBottom: 6,
    ...textH3,
  },
  input: {
    minHeight: 56,
    backgroundColor: '#40444B',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    ...label2,
  },
});
