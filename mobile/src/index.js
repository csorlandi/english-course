import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppProvider from '~/hooks';

import App from './App';

export default function index() {
  return (
    <NavigationContainer>
      <AppProvider>
        <App />
      </AppProvider>
    </NavigationContainer>
  );
}
