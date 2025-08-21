import { responsiveWidth } from '@utils/dimensions';
import { StyleSheet } from 'react-native';

export const styles = (
  marginHorizontal: number,
  marginVertical: number,
  paddingHorizontal: number,
  paddingVertical: number,
) =>
  StyleSheet.create({
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalWrapper: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      marginHorizontal,
      marginVertical,
      width: responsiveWidth() - marginHorizontal * 2,
      paddingHorizontal,
      paddingVertical,
      borderRadius: 0,
      alignSelf: 'center',
    },
  });
