import React from 'react';

import * as Styled from './styles';

export default function SearchBar() {
  return (
    <Styled.Container>
      <Styled.Input placeholder="Pesquisar" />
      <Styled.ButtonContainer>
        <Styled.ButtonIcon name="search" />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
}
