import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Title>Seus Dados</Styled.Title>
      <Styled.Description>
        Isso vai te ajudar a entrar na Área de Alunos
      </Styled.Description>
      <Styled.FormContainer>
        <Styled.Input first placeholder="Nome" />
        <Styled.Input placeholder="Email" />
        <Styled.Input placeholder="Senha" secureTextEntry />
        <Styled.Input last placeholder="Confirme Sua Senha" secureTextEntry />
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('preference')}
        >
          <Styled.ButtonText>Cadastrar</Styled.ButtonText>
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
    </Styled.Container>
  );
}
