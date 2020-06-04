import React from 'react';

import SignIn from '~/pages/AuthStack/SignInStack/SignIn';
import ForgotPassword from '~/pages/AuthStack/SignInStack/ForgotPassword';
import UseTerms from '~/pages/AuthStack/SignInStack/UseTerms';

import BackIcon from '~/components/BackIcon';
import HeaderTitle from '~/components/HeaderTitle';

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
            borderWidth: 0,
            shadowColor: colors.transparent,
          },
        })}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPassword}
        options={({ navigation }) => ({
          headerLeft: () => <BackIcon navigation={navigation} />,
          headerTitleAlign: 'center',
          headerTitle: 'Esqueci Minha Senha',
          headerTitleStyle: {
            color: colors.grayLight,
            fontFamily: 'Nunito-Bold',
            fontSize: fonts.regular,
          },
          headerStyle: {
            backgroundColor: colors.grayWhite,
            elevation: 0,
            borderWidth: 0,
            shadowColor: colors.transparent,
          },
        })}
      />
      <Stack.Screen
        name="use-terms"
        component={UseTerms}
        options={({ navigation }) => ({
          headerLeft: () => <BackIcon navigation={navigation} />,
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <HeaderTitle {...props}>
              Termos de Uso e Política de Privacidade
            </HeaderTitle>
          ),
          headerTitleStyle: {
            color: colors.grayLight,
            fontFamily: 'Nunito-Bold',
            fontSize: fonts.regular,
            textAlign: 'center',
          },
          headerStyle: {
            backgroundColor: colors.grayWhite,
            elevation: 0,
            borderWidth: 0,
            shadowColor: colors.transparent,
          },
        })}
      />
    </Stack.Navigator>
  );
}
