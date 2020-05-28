import React from 'react';

import Dictionary from '~/pages/MainStack/Dictionary';
import Upgrade from '~/pages/MainStack/Upgrade';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';

import { Tab } from './navigators';

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="lesson-stack" component={LessonStack} />
      <Tab.Screen name="dictionary" component={Dictionary} />
      <Tab.Screen name="profile-stack" component={ProfileStack} />
      <Tab.Screen name="upgrade" component={Upgrade} />
    </Tab.Navigator>
  );
}
