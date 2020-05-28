import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export default function OverviewProfile() {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Title>Página OverviewProfile</Styled.Title>
      <Styled.ButtonContainer
        onPress={() => navigation.navigate('edit-profile')}
      >
        <Styled.ButtonText>Edit Profile</Styled.ButtonText>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}
