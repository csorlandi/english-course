import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

export default function HeaderTitle({ children, ...rest }) {
  return (
    <Text numberOfLines={2} {...rest}>
      {children}
    </Text>
  );
}

HeaderTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
