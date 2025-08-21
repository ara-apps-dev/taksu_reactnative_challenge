/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  ReduceMotion,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Props } from './props';
import { responsiveHeight, responsiveWidth } from '@utils/dimensions';
import { Colors } from '@styles/colors';

export function CustomModal({
  visible,
  children,
  onRequestClose,
  onDidClose,
  onClose,
  marginHorizontal = 20,
  marginVertical = 20,
  paddingHorizontal = 0,
  paddingVertical = 20,
  animation = 'zoom',
  backgroundColor = Colors.textWhite,
  dimBackgroundColor = 'rgba(0,0,0,0.4)',
}: Props) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 300,
      reduceMotion: ReduceMotion.Never,
    });

    switch (animation) {
      case 'zoom':
        scale.value = 0.9;
        scale.value = withTiming(1, {
          duration: 300,
          reduceMotion: ReduceMotion.Never,
        });
        break;
      case 'slideUp':
        translateY.value = responsiveHeight();
        translateY.value = withTiming(0, {
          duration: 300,
          reduceMotion: ReduceMotion.Never,
        });
        break;
      case 'slideDown':
        translateY.value = -responsiveHeight();
        translateY.value = withTiming(0, {
          duration: 300,
          reduceMotion: ReduceMotion.Never,
        });
        break;
      case 'slideLeft':
        translateX.value = responsiveWidth();
        translateX.value = withTiming(0, {
          duration: 300,
          reduceMotion: ReduceMotion.Never,
        });
        break;
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        onRequestClose();
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  const close = () => {
    opacity.value = withTiming(0, {
      duration: 200,
      reduceMotion: ReduceMotion.Never,
    });
    switch (animation) {
      case 'zoom':
        scale.value = withTiming(
          0.9,
          { duration: 200, reduceMotion: ReduceMotion.Never },
          finished => {
            if (finished) {
              runOnJS(onClose)();
              runOnJS(onDidClose ?? (() => {}))();
            }
          },
        );
        break;
      case 'slideUp':
        translateY.value = withTiming(
          responsiveHeight(),
          { duration: 200, reduceMotion: ReduceMotion.Never },
          finished => {
            if (finished) {
              runOnJS(onClose)();
              runOnJS(onDidClose ?? (() => {}))();
            }
          },
        );
        break;
      case 'slideDown':
        translateY.value = withTiming(
          -responsiveHeight(),
          { duration: 200, reduceMotion: ReduceMotion.Never },
          finished => {
            if (finished) {
              runOnJS(onClose)();
              runOnJS(onDidClose ?? (() => {}))();
            }
          },
        );
        break;
      case 'slideLeft':
        translateX.value = withTiming(
          responsiveWidth(),
          { duration: 200, reduceMotion: ReduceMotion.Never },
          finished => {
            if (finished) {
              runOnJS(onClose)();
              runOnJS(onDidClose ?? (() => {}))();
            }
          },
        );
        break;
      default:
        runOnJS(onClose)();
        runOnJS(onDidClose ?? (() => {}))();
    }
  };

  useEffect(() => {
    !visible && close();
  }, [visible]);

  const modalStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale: scale.value },
      ],
    };
  });

  const gesture = Gesture.Tap().onEnd(() => {
    runOnJS(onRequestClose)();
    runOnJS(close)();
  });

  const style = styles(
    marginHorizontal,
    marginVertical,
    paddingHorizontal,
    paddingVertical,
  );

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <GestureDetector gesture={gesture}>
        <Animated.View style={style.backdrop}>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: dimBackgroundColor },
            ]}
          />
        </Animated.View>
      </GestureDetector>

      <View style={style.modalWrapper}>
        <Animated.View
          style={[style.modalContainer, modalStyle, { backgroundColor }]}
        >
          {children}
        </Animated.View>
      </View>
    </View>
  );
}
