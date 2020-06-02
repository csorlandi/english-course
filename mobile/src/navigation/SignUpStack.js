import React from 'react';

import SignUp from '~/pages/AuthStack/SignUpStack/SignUp';
import Preference from '~/pages/AuthStack/SignUpStack/Preference';

import BackIcon from '~/components/BackIcon';
import StepIndicator from '~/components/StepIndicator';
import ProgressBar from '~/components/ProgressBar';

import { colors } from '~/styles';

import { Stack } from './navigators';

export default function SignInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sign-up"
        component={SignUp}
        options={({ navigation }) => ({
          headerLeft: () => <BackIcon navigation={navigation} />,
          headerRight: () => <StepIndicator step="1/2" />,
          headerTitle: () => <ProgressBar progress={0.5} />,
          headerStyle: {
            backgroundColor: colors.grayWhite,
            elevation: 0,
            borderBottomWidth: 0,
          },
        })}
      />
      <Stack.Screen
        name="preference"
        component={Preference}
        options={({ navigation }) => ({
          headerLeft: () => <BackIcon navigation={navigation} />,
          headerRight: () => <StepIndicator step="2/2" />,
          headerTitle: () => <ProgressBar progress={1} />,
          headerStyle: {
            backgroundColor: colors.grayWhite,
            elevation: 0,
            borderBottomWidth: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
}
