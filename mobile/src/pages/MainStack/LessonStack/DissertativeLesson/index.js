import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function DissertativeLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <StatusBar barStyle="light-content" />
        <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
          <Styled.BackButtonIcon name="chevron-left" />
        </Styled.BackButtonContainer>
        <Styled.Title>Tell me more about you!</Styled.Title>
        <Styled.ContentContainer>
          <Styled.Input placeholder="Here you can write anything you want!" />
        </Styled.ContentContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('translate-lesson')}
        >
          <Styled.ButtonText>Próximo</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
