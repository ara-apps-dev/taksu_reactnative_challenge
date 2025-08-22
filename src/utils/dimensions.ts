import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_DEVICE_WIDTH = 450;

export const responsiveWidth = (value?: number) => {
  const widthToUse = value ?? SCREEN_WIDTH;
  return Math.min(widthToUse, MAX_DEVICE_WIDTH);
};

export const responsiveHeight = (value?: number) => {
  const heightToUse = value ?? SCREEN_HEIGHT;
  return heightToUse;
};
