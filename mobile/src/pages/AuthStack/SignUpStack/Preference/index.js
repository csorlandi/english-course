import React from 'react';

import * as Styled from './styles';

import studyImage from '~/assets/images/study.png';

export default function SignUp() {
  return (
    <Styled.Container>
      <Styled.Title>Porque você quer aprender um idioma?</Styled.Title>
      <Styled.Description>
        Queremos saber disso para podermos customizar sua experiência durante o
        aprendizado
      </Styled.Description>
      <Styled.ScrollContainer>
        <Styled.PreferencesContainer>
          <Styled.PreferenceContainer>
            <Styled.PreferenceImage source={studyImage} />
            <Styled.PreferenceTitle>Estudo</Styled.PreferenceTitle>
          </Styled.PreferenceContainer>
          <Styled.PreferenceContainer>
            <Styled.PreferenceImage source={studyImage} />
            <Styled.PreferenceTitle>Viagem</Styled.PreferenceTitle>
          </Styled.PreferenceContainer>
          <Styled.PreferenceContainer>
            <Styled.PreferenceImage source={studyImage} />
            <Styled.PreferenceTitle>Cultura</Styled.PreferenceTitle>
          </Styled.PreferenceContainer>
          <Styled.PreferenceContainer>
            <Styled.PreferenceImage source={studyImage} />
            <Styled.PreferenceTitle>Carreira</Styled.PreferenceTitle>
          </Styled.PreferenceContainer>
          <Styled.PreferenceContainer>
            <Styled.PreferenceImage source={studyImage} />
            <Styled.PreferenceTitle>Outro</Styled.PreferenceTitle>
          </Styled.PreferenceContainer>
        </Styled.PreferencesContainer>
      </Styled.ScrollContainer>
    </Styled.Container>
  );
}
