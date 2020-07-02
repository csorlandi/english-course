import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function TranslateLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <StatusBar barStyle="light-content" />
        <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
          <Styled.BackButtonIcon name="chevron-left" />
        </Styled.BackButtonContainer>
        <Styled.Title>Translate the sentence below</Styled.Title>
        <Styled.ContentContainer>
          <Styled.TranslateSentence>
            Everything is on the table!
          </Styled.TranslateSentence>
          <Styled.Input placeholder="Here you can write anything you want!" />
        </Styled.ContentContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('word-pairs-lesson')}
        >
          <Styled.ButtonText>Corrigir e Avançar</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
