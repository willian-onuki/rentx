import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/routes.d';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { Splash } from '../screens/Splash';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Splash'
    >
      <Screen
        name='Splash'
        component={Splash}
      />
      <Screen
        name='SignIn'
        component={SignIn}
      />
      <Screen
        name='FirstStep'
        component={FirstStep}
      />
      <Screen
        name='SecondStep'
        component={SecondStep}
      />
    </Navigator>
  );
}
