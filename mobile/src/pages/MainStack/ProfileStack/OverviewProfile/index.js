import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import profileImage from '~/assets/images/do-does.png';

export default function OverviewProfile() {
  const navigation = useNavigation();

  return (
    <Styled.SafeAreaContainer>
      <Styled.Container>
        <Styled.InfoContainer>
          <Styled.UserInfoContainer>
            <Styled.UserName>Claudio Orlandi</Styled.UserName>
            <Styled.Description>
              Visualizar e editar seu perfil
            </Styled.Description>
          </Styled.UserInfoContainer>
          <Styled.ProfileImage source={profileImage} />
        </Styled.InfoContainer>
        <Styled.HistoryTitle>histórico</Styled.HistoryTitle>
        <Styled.HistoryListWrapperContainer>
          <Styled.HistoryListContainer>
            <Styled.HistoryItemContainer>
              <Styled.HistoryItemImage source={profileImage} />
              <Styled.HistoryItemTitle>Do - does</Styled.HistoryItemTitle>
              <Styled.HistoryItemDate>17/06/2020</Styled.HistoryItemDate>
            </Styled.HistoryItemContainer>
            <Styled.HistoryItemContainer>
              <Styled.HistoryItemImage source={profileImage} />
              <Styled.HistoryItemTitle>Do - does</Styled.HistoryItemTitle>
              <Styled.HistoryItemDate>17/06/2020</Styled.HistoryItemDate>
            </Styled.HistoryItemContainer>
            <Styled.HistoryItemContainer>
              <Styled.HistoryItemImage source={profileImage} />
              <Styled.HistoryItemTitle>Do - does</Styled.HistoryItemTitle>
              <Styled.HistoryItemDate>17/06/2020</Styled.HistoryItemDate>
            </Styled.HistoryItemContainer>
            <Styled.HistoryItemContainer>
              <Styled.HistoryItemImage source={profileImage} />
              <Styled.HistoryItemTitle>Do - does</Styled.HistoryItemTitle>
              <Styled.HistoryItemDate>17/06/2020</Styled.HistoryItemDate>
            </Styled.HistoryItemContainer>
            <Styled.HistoryItemContainer>
              <Styled.HistoryItemImage source={profileImage} />
              <Styled.HistoryItemTitle>Do - does</Styled.HistoryItemTitle>
              <Styled.HistoryItemDate>17/06/2020</Styled.HistoryItemDate>
            </Styled.HistoryItemContainer>
          </Styled.HistoryListContainer>
        </Styled.HistoryListWrapperContainer>
        <Styled.OptionsItemContainer
          onPress={() => navigation.navigate('edit-profile')}
        >
          <Styled.OptionsItemLeftIcon name="pencil" />
          <Styled.OptionsItemTitle>Editar Perfil</Styled.OptionsItemTitle>
          <Styled.OptionsItemRightIcon name="chevron-right" />
        </Styled.OptionsItemContainer>
        <Styled.OptionsItemContainer>
          <Styled.OptionsItemLeftIcon name="lock" />
          <Styled.OptionsItemTitle>Mudar Senha</Styled.OptionsItemTitle>
          <Styled.OptionsItemRightIcon name="chevron-right" />
        </Styled.OptionsItemContainer>
        <Styled.OptionsItemContainer>
          <Styled.OptionsItemLeftIcon name="info-circle" />
          <Styled.OptionsItemTitle>Sobre Nós</Styled.OptionsItemTitle>
          <Styled.OptionsItemRightIcon name="chevron-right" />
        </Styled.OptionsItemContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
