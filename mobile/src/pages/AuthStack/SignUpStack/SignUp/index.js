import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Title>Página SignUp</Styled.Title>
      <Styled.ButtonContainer onPress={() => navigation.navigate('preference')}>
        <Styled.ButtonText>Preference</Styled.ButtonText>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}
