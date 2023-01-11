import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Success } from '../screens/Success';
import { RootStackParamList } from '../global/routes';
import { SchedulingDone } from '../screens/SchedulingDone';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { AppTabRoutes } from './app.tab.routes';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Home'
        component={AppTabRoutes}
      />
      <Screen
        name='CarDetails'
        component={CarDetails}
      />
      <Screen
        name='Scheduling'
        component={Scheduling}
      />
      <Screen
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Screen
        name='Success'
        component={Success}
      />
    </Navigator>
  );
}
