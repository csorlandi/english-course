import React from 'react';

import { StatusBar } from 'react-native';

import * as Styled from './styles';

export default function Upgrade() {
  return (
    <Styled.SafeAreaContainer>
      <StatusBar barStyle="light-content" />
      <Styled.Container>
        <Styled.TitleContainer>
          <Styled.Title>English Course</Styled.Title>
          <Styled.TitleTagContainer>
            <Styled.TitleTag>PRO</Styled.TitleTag>
          </Styled.TitleTagContainer>
        </Styled.TitleContainer>
        <Styled.BenefitsListContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>Intuitivo e Simples</Styled.BenefitText>
          </Styled.BenefitContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>Método Eficaz</Styled.BenefitText>
          </Styled.BenefitContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>Siga no seu Ritmo</Styled.BenefitText>
          </Styled.BenefitContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>Ensino de forma Divertida</Styled.BenefitText>
          </Styled.BenefitContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>Aprenda onde quiser</Styled.BenefitText>
          </Styled.BenefitContainer>
          <Styled.BenefitContainer>
            <Styled.BenefitLeftIcon name="chevron-right" />
            <Styled.BenefitText>
              Saiba a pronúncia das palavras
            </Styled.BenefitText>
          </Styled.BenefitContainer>
        </Styled.BenefitsListContainer>
        <Styled.ButtonContainer>
          <Styled.ButtonText>Comprar Agora</Styled.ButtonText>
          <Styled.ButtonPrice>R$ 97,00</Styled.ButtonPrice>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Styled.SafeAreaContainer>
  );
}
