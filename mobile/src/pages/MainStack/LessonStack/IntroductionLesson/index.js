import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import doDoesImage from '~/assets/images/do-does.png';

export default function IntroductionLesson() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.Cover source={doDoesImage} />
        <Styled.Title>Do - Does</Styled.Title>
        <Styled.Description>
          Nesse capítulo conheceremos verbos que funcionam com os auxiliares
          “DO” e “DOES” e que, portanto, seguem regras específicas.
        </Styled.Description>
        <Styled.Br />
        <Styled.Description>
          Verbo To Be, Verbos Modais e os Verbos Do/Does, são as três categorias
          de verbos em inglês.
        </Styled.Description>
        <Styled.ButtonContainer
          onPress={() => navigation.navigate('overview-lesson')}
        >
          <Styled.ButtonText>Começar</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
