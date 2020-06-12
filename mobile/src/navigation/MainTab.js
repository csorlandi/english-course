import React from 'react';

import Dictionary from '~/pages/MainStack/Dictionary';
import Upgrade from '~/pages/MainStack/Upgrade';

import { colors } from '~/styles';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';

import MainTabIcon from '~/components/MainTabIcon';

import { Tab } from './navigators';

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <MainTabIcon {...props} route={route.name} />,
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
