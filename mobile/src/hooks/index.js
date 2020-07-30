import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './auth';

export default function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
