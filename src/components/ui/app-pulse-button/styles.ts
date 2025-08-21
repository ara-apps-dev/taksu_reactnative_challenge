import {StyleSheet} from 'react-native';

export const Styles = (size?: number) =>
  StyleSheet.create({
    touchableWrapper: {
      borderRadius: size,
      overflow: 'hidden',
    },
    innerWrapper: {
      borderRadius: size,
    },
  });
