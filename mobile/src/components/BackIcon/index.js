import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function BackButton({ navigation }) {
  return (
    <Styled.Container onPress={() => navigation.goBack()}>
      <Styled.BackIcon name="chevron-left" />
    </Styled.Container>
  );
}

BackButton.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
