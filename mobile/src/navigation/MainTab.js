/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Dictionary from '~/pages/MainStack/Dictionary';
import Upgrade from '~/pages/MainStack/Upgrade';

import { colors } from '~/styles';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';

import { Tab } from './navigators';

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
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
        },
      })}
      barStyle={{
        backgroundColor: colors.grayWhite,
        borderTopColor: colors.graySuperLight,
        borderTopWidth: 1,
      }}
      activeColor={colors.primaryLight}
      inactiveColor={colors.grayRegular}
    >
      <Tab.Screen
        name="lesson-stack"
        component={LessonStack}
        options={{ tabBarLabel: 'Aulas' }}
      />
      <Tab.Screen
        name="dictionary"
        component={Dictionary}
        options={{ tabBarLabel: 'Dicionário' }}
      />
      <Tab.Screen
        name="profile-stack"
        component={ProfileStack}
        options={{ tabBarLabel: 'Perfil' }}
      />
      <Tab.Screen
        name="upgrade"
        component={Upgrade}
        options={{ tabBarLabel: 'Compras' }}
      />
    </Tab.Navigator>
  );
}

MainTab.propTypes = {
  focused: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
