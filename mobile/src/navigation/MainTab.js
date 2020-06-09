import React from 'react';

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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'lesson-stack':
              iconName = 'th-list';
              break;
            case 'dictionary':
              iconName = 'file-text';
              break;
            case 'profile-stack':
              iconName = 'user-circle';
              break;
            case 'upgrade':
              iconName = 'cart-plus';
              break;
            default:
              iconName = 'book';
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primaryDarker,
        inactiveTintColor: colors.primaryLight,
      }}
    >
      <Tab.Screen name="lesson-stack" component={LessonStack} />
      <Tab.Screen name="dictionary" component={Dictionary} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
      <Tab.Screen name="upgrade" component={Upgrade} />
    </Tab.Navigator>
  );
}
