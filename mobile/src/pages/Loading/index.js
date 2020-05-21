import React from 'react';

import * as Styled from './styles';

import loading from '~/assets/images/loading.png';

export default function Loading() {
  return (
    <Styled.Container>
      <Styled.Icon source={loading} />
      <Styled.Title>Carregando ...</Styled.Title>
      <Styled.Tip>
        Sabia que tem mais pessoas aprendendo inglês do que pessoas no Estados
        Unidos?
      </Styled.Tip>
    </Styled.Container>
  );
}
