import React from 'react';

import SignIn from '~/pages/AuthStack/SignInStack/SignIn';
import ForgotPassword from '~/pages/AuthStack/SignInStack/ForgotPassword';
import UseTerms from '~/pages/AuthStack/SignInStack/UseTerms';

import BackIcon from '~/components/BackIcon';

import { colors, fonts } from '~/styles';

import { Stack } from './navigators';

export default function SignInStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sign-in"
        component={SignIn}
        options={({ navigation }) => ({
          headerLeft: () => <BackIcon navigation={navigation} />,
          headerTitleAlign: 'center',
          headerTitle: 'Insira seus dados',
          headerTitleStyle: {
            color: colors.grayLight,
            fontFamily: 'Nunito-Bold',
            fontSize: fonts.regular,
          },
          headerStyle: {
            backgroundColor: colors.grayWhite,
            elevation: 0,
            borderBottomWidth: 0,
          },
        })}
      />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />
      <Stack.Screen name="use-terms" component={UseTerms} />
    </Stack.Navigator>
  );
}
