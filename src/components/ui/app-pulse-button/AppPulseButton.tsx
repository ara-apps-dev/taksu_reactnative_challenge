import React from 'react';
import {
  Animated,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppIcon } from '../app-icon';
import { AppPulseButtonProps } from './props';
import { Styles } from './styles';
import { Colors } from '@styles/colors';

export const AppPulseLogo = ({
  icon = 'add',
  iconSize,
  iconColor,
  size = 20,
  radius = 20,
  containerStyle,
  containerPadding = 10,
  onPress,
  disableAnimation = false,
}: AppPulseButtonProps) => {
  const appStyle = Styles(radius);
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    if (disableAnimation) {
      return;
    }
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const content = (
    <Animated.View
      style={{
        transform: [{ scale }],
        ...{ padding: containerPadding },
      }}
    >
      <AppIcon
        name={icon}
        size={iconSize ? `${iconSize}` : undefined}
        color={iconColor}
      />
    </Animated.View>
  );

  if (Platform.OS === 'android') {
    return (
      <View style={[appStyle.touchableWrapper, containerStyle]}>
        <TouchableNativeFeedback
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          background={TouchableNativeFeedback.Ripple(
            Colors.bgPrimary,
            true,
            size,
          )}
        >
          <View style={appStyle.innerWrapper}>{content}</View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  // iOS fallback
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
      style={[appStyle.touchableWrapper, containerStyle]}
    >
      {content}
    </TouchableOpacity>
  );
};
