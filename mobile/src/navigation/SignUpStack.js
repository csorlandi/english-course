import React from 'react';

import SignUp from '~/pages/AuthStack/SignUpStack/SignUp';
import Preference from '~/pages/AuthStack/SignUpStack/Preference';

import { Stack } from './navigators';

export default function SignInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sign-up" component={SignUp} />
      <Stack.Screen name="preference" component={Preference} />
    </Stack.Navigator>
  );
}
