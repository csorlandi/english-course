import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function StepIndicator({ step }) {
  return (
    <Styled.Container>
      <Styled.Text>{step}</Styled.Text>
    </Styled.Container>
  );
}

StepIndicator.propTypes = {
  step: PropTypes.string.isRequired,
};
