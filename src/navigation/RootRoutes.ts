import { StackNavigationProp } from '@react-navigation/stack';

export enum RootStackRoutes {
  Login = 'Login',
  Home = 'Home',
}

export type RootStackParamList = {
  [RootStackRoutes.Login]: undefined;
  [RootStackRoutes.Home]: undefined;
};

export type LoginNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootStackRoutes.Login
>;

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootStackRoutes.Home
>;
