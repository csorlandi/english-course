import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function WordPairsLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <StatusBar barStyle="light-content" />
        <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
          <Styled.BackButtonIcon name="chevron-left" />
        </Styled.BackButtonContainer>
        <Styled.Title>Phrasal Verbs</Styled.Title>
        <Styled.ContentContainer>
          <Styled.OptionsListContainer>
            <Styled.OptionContainer>
              <Styled.OptionText>coat</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="wrong">
              <Styled.OptionText state="wrong">camiseta</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="wrong">
              <Styled.OptionText state="wrong">t-shirt</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="selected">
              <Styled.OptionText state="selected">vestido</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="selected">
              <Styled.OptionText state="selected">dress</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer>
              <Styled.OptionText>capa</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer>
              <Styled.OptionText>sweater</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="correct">
              <Styled.OptionText state="correct">jaqueta</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer state="correct">
              <Styled.OptionText state="correct">jacket</Styled.OptionText>
            </Styled.OptionContainer>
            <Styled.OptionContainer>
              <Styled.OptionText>suéter</Styled.OptionText>
            </Styled.OptionContainer>
          </Styled.OptionsListContainer>
        </Styled.ContentContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('video-lesson')}
        >
          <Styled.ButtonText>Próximo</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
