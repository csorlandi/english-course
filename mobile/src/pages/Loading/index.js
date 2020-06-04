import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import loading from '~/assets/images/loading.png';

export default function Loading() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Icon source={loading} />
        <Styled.Title>Carregando ...</Styled.Title>
        <Styled.Tip>
          Sabia que tem mais pessoas aprendendo inglês do que pessoas no Estados
          Unidos?
        </Styled.Tip>
        <Styled.ButtonContainer onPress={() => navigation.navigate('intro')}>
          <Styled.ButtonText>Intro</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('auth-stack')}
        >
          <Styled.ButtonText>Auth Stack</Styled.ButtonText>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer onPress={() => navigation.navigate('main-tab')}>
          <Styled.ButtonText>Main Tab</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
