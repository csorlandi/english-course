import React from 'react';

import * as Styled from './styles';

import bannerImage from '~/assets/images/searching.png';

export default function ForgotPassword() {
  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Styled.Banner source={bannerImage} />
        <Styled.Title>Insira o Email associado com a sua conta.</Styled.Title>
        <Styled.Description>
          Nós vamos enviar para o seu email um link para você resetar sua senha.
        </Styled.Description>
        <Styled.Input placeholder="Email cadastrado" />
        <Styled.ButtonContainer>
          <Styled.ButtonText>Enviar</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.FormContainer>
    </Styled.Container>
  );
}
