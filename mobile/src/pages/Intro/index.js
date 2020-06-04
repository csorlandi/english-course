import React from 'react';

import { useNavigation } from '@react-navigation/native';

import ListItem from './components/ListItem';
import ButtonsLabel from './components/ButtonsLabel';

import * as Styled from './styles';

import slides from './content';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Intro
        renderItem={(props) => <ListItem {...props} />}
        data={slides}
        onDone={() => navigation.goBack()}
        onSkip={() => navigation.goBack()}
        showSkipButton
        showPrevButton
        renderNextButton={() => <ButtonsLabel label="Próximo" />}
        renderPrevButton={() => <ButtonsLabel label="Anterior" />}
        renderDoneButton={() => <ButtonsLabel label="Continuar" />}
        renderSkipButton={() => <ButtonsLabel label="Pular" />}
      />
    </Styled.Container>
  );
}
