import { buttonLabel1 } from '@styles/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 1,
    minHeight: 40,
  },
  primary: {
    backgroundColor: '#5440D1', // purple
  },
  success: {
    backgroundColor: '#39C36D', // green
  },
  text: {
    ...buttonLabel1,
  },
});
