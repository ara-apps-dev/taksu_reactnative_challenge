import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import { RootStackParamList, RootStackRoutes } from './RootRoutes';
import HomeScreen from '../screens/home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { sharedScreenOptions } from './options/screenOptions';
import { useEffect, useState } from 'react';
import { UsersStore } from 'mobx/stores/UserStore';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [initialRoute, setInitialRoute] = useState<RootStackRoutes | null>(
    null,
  );

  useEffect(() => {
    const checkUser = async () => {
      const store = UsersStore.create({ users: [], currentUser: undefined });
      await store.loadUsers();
      setInitialRoute(
        store.currentUser ? RootStackRoutes.Home : RootStackRoutes.Login,
      );
    };
    checkUser();
  }, []);

  if (!initialRoute) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={sharedScreenOptions}
      >
        <Stack.Screen name={RootStackRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={RootStackRoutes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
