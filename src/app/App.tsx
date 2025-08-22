import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProviders } from './AppProviders.tsx';
import { globalStyles } from '../styles/global.ts';
import RootNavigator from '../navigation/RootNavigator.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={globalStyles.flexTop}>
        <AppProviders>
          <RootNavigator />
        </AppProviders>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
