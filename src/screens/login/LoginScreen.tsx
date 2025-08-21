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
import { useLogin } from '@hooks/useLogin';
import { Formik } from 'formik';
import { loginSchema } from '@schemas/login-schema/loginSchema';
import { Colors } from '@styles/colors';

const LoginScreen = () => {
  const appStyles = styles;
  const { userStore, goToHome } = useLogin();
  return (
    <AppScreenWrapper
      barStyle="light-content"
      statusBarBg={Colors.bgPrimary}
      containerStyle={appStyles.container}
      contentStyle={{
        ...globalStyles.flexCenter,
        ...{ width: responsiveWidth() },
      }}
    >
      <Formik
        initialValues={{ name: '' }}
        validationSchema={loginSchema}
        onSubmit={values => {
          userStore.setCurrentUser(values.name);
          goToHome();
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={appStyles.form}>
            <TextInputWithLabel
              label={'Name'}
              placeholder="Input Name"
              value={values.name}
              onChangeText={handleChange('name')}
              error={errors.name && touched.name ? errors.name : undefined}
              containerStyle={{ width: responsiveWidth() - spacing.s72 }}
            />
            <View style={globalStyles.rowBetween}>
              <AppButton
                title={'Next'}
                trailing={<AppIcon name={'arrowRight'} size="20" />}
                variant="success"
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
        )}
      </Formik>
    </AppScreenWrapper>
  );
};

export default LoginScreen;
