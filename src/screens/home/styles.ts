import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { spacing } from '@utils/spacing';
import { Colors } from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexCenter,
    backgroundColor: Colors.bgPrimary,
  },
  header: {
    marginTop: 50,
    paddingHorizontal: spacing.s32,
    paddingBottom: spacing.s20,
  },
  add: {
    position: 'absolute',
    bottom: spacing.s40,
    right: spacing.s36,
    backgroundColor: Colors.buttonVariantSuccess,
    width: 75,
    height: 75,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
