import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import playerImage from '~/assets/images/player.png';

import * as Styled from './styles';

export default function AudioLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <StatusBar barStyle="light-content" />
        <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
          <Styled.BackButtonIcon name="chevron-left" />
        </Styled.BackButtonContainer>
        <Styled.Image name="user-circle" />
        <Styled.Title>
          How to Build an Audio Player in React Native
        </Styled.Title>
        <Styled.Player source={playerImage} />
        <Styled.ControlsContainer>
          <Styled.ControlsButtonContainer>
            <Styled.ControlsIcon name="backward" />
          </Styled.ControlsButtonContainer>
          <Styled.ControlsButtonContainer>
            <Styled.ControlsIcon name="play" />
          </Styled.ControlsButtonContainer>
          <Styled.ControlsButtonContainer>
            <Styled.ControlsIcon name="forward" />
          </Styled.ControlsButtonContainer>
        </Styled.ControlsContainer>
        <Styled.ContentContainer>
          <Styled.TranscriptionTitle>
            Transcrição do Áudio
          </Styled.TranscriptionTitle>
          <Styled.TranscriptionTextScroll>
            <Styled.TranscriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula nunc sed sapien rhoncus, ut ultricies purus varius. Fusce
              ante odio, elementum suscipit ullamcorper eu, convallis ac ante.
              Morbi viverra eget mauris nec convallis. Praesent aliquet, mauris
              in efficitur finibus, nisi metus venenatis velit, non sollicitudin
              ante sem sed nunc. Fusce commodo sem suscipit, viverra risus in,
              efficitur erat. Sed tortor ante, suscipit sit amet eros sed,
              luctus pulvinar ligula. Aliquam nec massa et ipsum commodo auctor.
              Phasellus nec enim tristique, eleifend urna sed, pharetra purus.
              Fusce tortor elit, vestibulum eu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vehicula nunc sed sapien
              rhoncus, ut ultricies purus varius. Fusce ante odio, elementum
              suscipit ullamcorper eu, convallis ac ante. Morbi viverra eget
              mauris nec convallis. Praesent aliquet, mauris in efficitur
              finibus, nisi metus venenatis velit, non sollicitudin ante sem sed
              nunc. Fusce commodo sem suscipit, viverra risus in, efficitur
              erat. Sed tortor ante, suscipit sit amet eros sed, luctus pulvinar
              ligula. Aliquam nec massa et ipsum commodo auctor. Phasellus nec
              enim tristique, eleifend urna sed, pharetra purus. Fusce tortor
              elit, vestibulum eu
            </Styled.TranscriptionText>
          </Styled.TranscriptionTextScroll>
          <Styled.ButtonContainer
            onPress={() => navigation.navigate('multiple-choice-lesson')}
          >
            <Styled.ButtonText>Próximo</Styled.ButtonText>
          </Styled.ButtonContainer>
        </Styled.ContentContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
