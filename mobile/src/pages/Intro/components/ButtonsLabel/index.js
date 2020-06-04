import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function ButtonsLabel({ label }) {
  return <Styled.Label>{label}</Styled.Label>;
}

ButtonsLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
