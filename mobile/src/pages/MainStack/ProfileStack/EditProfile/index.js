import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import profileImage from '~/assets/images/profile.png';

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.ImageContainer source={profileImage}>
          <Styled.BackButtonContainer onPress={() => navigation.goBack()}>
            <Styled.BackButtonIcon name="times-circle" />
          </Styled.BackButtonContainer>
          <Styled.ChangeImageButtonContainer>
            <Styled.ChangeImageButtonIcon name="camera" />
            <Styled.ChangeImageButtonText>
              Trocar Imagem
            </Styled.ChangeImageButtonText>
          </Styled.ChangeImageButtonContainer>
        </Styled.ImageContainer>
        <Styled.UserDataContainer>
          <Styled.UserDataLine>
            <Styled.UserDataLabel>Nome</Styled.UserDataLabel>
            <Styled.UserDataValue>Claudio Orlandi</Styled.UserDataValue>
            <Styled.UserDataRightIcon name="chevron-right" />
          </Styled.UserDataLine>
          <Styled.UserDataLine>
            <Styled.UserDataLabel>Email</Styled.UserDataLabel>
            <Styled.UserDataValue>
              claudiosorlandi@gmail.com
            </Styled.UserDataValue>
            <Styled.UserDataRightIcon name="chevron-right" />
          </Styled.UserDataLine>
          <Styled.UserDataLine>
            <Styled.UserDataLabel>Telefone</Styled.UserDataLabel>
            <Styled.UserDataValue>(19) 99999-9999</Styled.UserDataValue>
            <Styled.UserDataRightIcon name="chevron-right" />
          </Styled.UserDataLine>
        </Styled.UserDataContainer>
        <Styled.ButtonContainer>
          <Styled.ButtonText>Salvar</Styled.ButtonText>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
