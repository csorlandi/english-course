import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Auth from '~/pages/Auth';

import SignUpPlatform from '~/pages/SignUpPlatform';
import SignUpEmail from '~/pages/SignUpEmail';
import SignUpChoose from '~/pages/SignUpChoose';

import Home from '~/pages/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SignUpStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpPlatform" component={SignUpPlatform} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
      <Stack.Screen name="SignUpChoose" component={SignUpChoose} />
    </Stack.Navigator>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="SignUpStack" component={SignUpStack} />
    </Stack.Navigator>
  );
}
