import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function MultipleChoiceLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <StatusBar barStyle="light-content" />
        <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
          <Styled.BackButtonIcon name="chevron-left" />
        </Styled.BackButtonContainer>
        <Styled.Title>Do you drink milk every day?</Styled.Title>
        <Styled.ContentContainer>
          <Styled.OptionContainer>
            <Styled.OptionText>No, you don't.</Styled.OptionText>
          </Styled.OptionContainer>
          <Styled.OptionContainer state="wrong">
            <Styled.OptionText state="wrong">Yes, you do.</Styled.OptionText>
          </Styled.OptionContainer>
          <Styled.OptionContainer>
            <Styled.OptionText>Yes, I do.</Styled.OptionText>
          </Styled.OptionContainer>
          <Styled.OptionContainer state="correct">
            <Styled.OptionText state="correct">No, you do.</Styled.OptionText>
          </Styled.OptionContainer>
        </Styled.ContentContainer>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('dissertative-lesson')}
        >
          <Styled.ButtonText>Próximo</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
