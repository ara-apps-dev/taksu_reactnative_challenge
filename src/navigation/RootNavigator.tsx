import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import { RootStackParamList, RootStackRoutes } from './RootRoutes';
import HomeScreen from '../screens/home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { sharedScreenOptions } from './options/screenOptions';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootStackRoutes.Login}
        screenOptions={sharedScreenOptions}
      >
        <Stack.Screen name={RootStackRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={RootStackRoutes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
