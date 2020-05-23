import React from 'react';

import { colors } from '~/styles';

import * as Styled from './styles';

export default function SignUpPlatform() {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.BackIcon />
        <Styled.Progress />
      </Styled.HeaderContainer>
      <Styled.TitleContainer>
        <Styled.Title>Escolha a forma de cadastro</Styled.Title>
        <Styled.Description>
          Isso vai te ajudar a ter acesso à Área de Alunos
        </Styled.Description>
      </Styled.TitleContainer>
      <Styled.OptionsContainer>
        <Styled.Option color={colors.danger} first>
          <Styled.OptionIcon color={colors.danger} name="facebook-f" />
          <Styled.OptionName color={colors.danger}>Google</Styled.OptionName>
        </Styled.Option>
        <Styled.Option color={colors.success}>
          <Styled.OptionIcon color={colors.success} name="at" />
          <Styled.OptionName color={colors.success}>Email</Styled.OptionName>
        </Styled.Option>
        <Styled.Option color={colors.primary}>
          <Styled.OptionIcon color={colors.primary} name="google" />
          <Styled.OptionName color={colors.primary}>Facebook</Styled.OptionName>
        </Styled.Option>
      </Styled.OptionsContainer>
    </Styled.Container>
  );
}
