import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '~/hooks/auth';

import * as Styled from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('csorlandi@twitch.tv');
  const [password, setPassword] = useState('123123');

  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Styled.Input
          first
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Styled.Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Styled.ForgotButtonContainer
          onPress={() => navigation.navigate('forgot-password')}
        >
          <Styled.ForgotButtonText>Esqueci Minha Senha</Styled.ForgotButtonText>
        </Styled.ForgotButtonContainer>
        <Styled.ButtonContainer onPress={() => auth.signIn(email, password)}>
          <Styled.ButtonText>Entrar</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.DividerContainer>
          <Styled.DividerLine />
          <Styled.DividerText>ou</Styled.DividerText>
        </Styled.DividerContainer>
        <Styled.SocialButtonsContainer>
          <Styled.FacebookButtonContainer>
            <Styled.FacebookButtonIcon name="facebook-f" />
            <Styled.FacebookButtonText>Facebook</Styled.FacebookButtonText>
          </Styled.FacebookButtonContainer>
          <Styled.GoogleButtonContainer>
            <Styled.GoogleButtonIcon name="google" />
            <Styled.GoogleButtonText>Google</Styled.GoogleButtonText>
          </Styled.GoogleButtonContainer>
        </Styled.SocialButtonsContainer>
      </Styled.FormContainer>
      <Styled.UseTermsContainer
        onPress={() => navigation.navigate('use-terms')}
      >
        <Styled.UseTermsDescription>
          Ao entrar no English Course, você concorda com os nossos{' '}
          <Styled.UseTermsBold>Termos de Uso</Styled.UseTermsBold> e{' '}
          <Styled.UseTermsBold>Política de Privacidade</Styled.UseTermsBold>
        </Styled.UseTermsDescription>
      </Styled.UseTermsContainer>
    </Styled.Container>
  );
}
