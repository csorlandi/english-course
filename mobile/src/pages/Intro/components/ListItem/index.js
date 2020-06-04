import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

export default function ListItem({ item }) {
  return (
    <Styled.Container>
      <Styled.Cover source={item.image} />
      <Styled.Title>{item.title}</Styled.Title>
      <Styled.Description>{item.text}</Styled.Description>
    </Styled.Container>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
