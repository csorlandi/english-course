import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function Progress({ progress }) {
  return (
    <Styled.Container>
      <Styled.Progress progress={progress} />
    </Styled.Container>
  );
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};
