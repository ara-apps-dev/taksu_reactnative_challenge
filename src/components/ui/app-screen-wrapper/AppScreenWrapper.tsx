import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { Props } from './props';
import { globalStyles } from '../../../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppScreenWrapper({
  header,
  children,
  footer,
  backgroundColor = '#36393F',
  statusBarBg = 'transparent',
  barStyle,
  hideStatusBar = false,
  contentPadding = 0,
  contentStyle,
  containerStyle,
  scrollable = true,
  showsVerticalScrollIndicator = false,
  disableSafeArea = false,
  translucentStatusBar = false,
}: Props) {
  const Wrapper = disableSafeArea ? View : SafeAreaView;

  const Content = scrollable ? (
    <View style={[{ backgroundColor }]}>
      <ScrollView
        contentContainerStyle={[{ padding: contentPadding }, contentStyle]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  ) : (
    <View
      style={[globalStyles.flexTop, { padding: contentPadding }, contentStyle]}
    >
      {children}
    </View>
  );

  return (
    <Wrapper
      style={[
        globalStyles.flexTop,
        { backgroundColor: statusBarBg },
        containerStyle,
      ]}
    >
      <StatusBar
        barStyle={barStyle ?? 'default'}
        translucent={translucentStatusBar}
        hidden={hideStatusBar}
        backgroundColor={statusBarBg}
        showHideTransition="slide"
      />
      {header}
      {Content}
      {footer}
    </Wrapper>
  );
}
