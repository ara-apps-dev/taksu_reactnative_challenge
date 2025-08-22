import { Colors } from '@styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  content: {
    width: '80%',
    backgroundColor: Colors.textWhite,
    borderRadius: 12,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
