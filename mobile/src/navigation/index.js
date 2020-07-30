import React from 'react';

import Loading from '~/pages/Loading';
import Intro from '~/pages/Intro';

import AuthStack from './AuthStack';
import MainTab from './MainTab';

import { Stack } from './navigators';

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName>
      <Stack.Screen name="loading" component={Loading} />
      <Stack.Screen name="auth-stack" component={AuthStack} />
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="main-tab" component={MainTab} />
    </Stack.Navigator>
  );
}
