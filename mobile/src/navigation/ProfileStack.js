import React from 'react';

import OverviewProfile from '~/pages/MainStack/ProfileStack/OverviewProfile';
import EditProfile from '~/pages/MainStack/ProfileStack/EditProfile';

import { Stack } from './navigators';

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="overview-profile"
        component={OverviewProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="edit-profile" component={EditProfile} />
    </Stack.Navigator>
  );
}
