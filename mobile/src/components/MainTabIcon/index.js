import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainTabIcon({ focused, color, route }) {
  let iconName;

  switch (route) {
    case 'lesson-stack':
      iconName = `${focused ? 'list-ul' : 'align-justify'}`;
      break;
    case 'dictionary':
      iconName = `${focused ? 'file-text' : 'file'}`;
      break;
    case 'profile-stack':
      iconName = `${focused ? 'user-circle' : 'user'}`;
      break;
    case 'upgrade':
      iconName = `${focused ? 'cart-plus' : 'shopping-cart'}`;
      break;
    default:
      iconName = 'book';
      break;
  }

  return <Icon name={iconName} color={color} size={22} />;
}

MainTabIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
