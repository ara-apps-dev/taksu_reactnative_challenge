import { Colors } from '@styles/colors';
import { buttonLabel1 } from '@styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 1,
    minHeight: 40,
  },
  primary: {
    backgroundColor: Colors.buttonVariantPrimary, // purple
  },
  success: {
    backgroundColor: Colors.buttonVariantSuccess, // green
  },
  accent: {
    backgroundColor: Colors.transparent, // green
  },
  text: {
    ...buttonLabel1,
  },
});
