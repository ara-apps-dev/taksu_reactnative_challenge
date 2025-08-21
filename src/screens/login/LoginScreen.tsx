import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import TextInputWithLabel from '@components/ui/text-input-with-label/TextInputWithLabel';
import AppScreenWrapper from '@components/ui/app-screen-wrapper/AppScreenWrapper';
import { globalStyles } from '@styles/global';
import AppButton from '@components/ui/app-button/AppButton';
import { responsiveWidth } from '@utils/dimensions';
import { spacing } from '@utils/spacing';
import { AppIcon } from '@components/ui/app-icon';

const LoginScreen = () => {
  const appStyles = styles;
  return (
    <AppScreenWrapper
      barStyle="light-content"
      statusBarBg="#36393F"
      containerStyle={appStyles.container}
      contentStyle={{ ...globalStyles.flexCenter }}
    >
      <View style={appStyles.form}>
        <TextInputWithLabel
          label={'Name'}
          placeholder="Input Name"
          containerStyle={{ width: responsiveWidth() - spacing.s72 }}
        />
        <View style={globalStyles.rowBetween}>
          <AppButton
            title={'Next'}
            trailing={<AppIcon name={'arrowRight'} size="20" />}
            variant="success"
            onPress={() => {}}
          />
        </View>
      </View>
    </AppScreenWrapper>
  );
};

export default LoginScreen;
