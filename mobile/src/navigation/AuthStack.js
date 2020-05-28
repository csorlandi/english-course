import React from 'react';

import Home from '~/pages/AuthStack/Home';

import SignInStack from './SignInStack';
import SignUpStack from './SignUpStack';

import { Stack } from './navigators';

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="sign-in-stack" component={SignInStack} />
      <Stack.Screen name="sign-up-stack" component={SignUpStack} />
    </Stack.Navigator>
  );
}
