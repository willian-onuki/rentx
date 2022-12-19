import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Success } from '../screens/Success';
import { RootStackParamList } from '../global/routes.d';
import { SchedulingDone } from '../screens/SchedulingDone';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SignIn'
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
      <Screen
        name='Home'
        component={Home}
        // This options prevents the user iphone to swipe back
        options={{
          gestureEnabled: false,
        }}
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
      <Screen
        name='SchedulingDone'
        component={SchedulingDone}
      />
    </Navigator>
  );
}
