import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { RootStackParamList } from '../global/routes.d';
import { SchedulingDone } from '../screens/SchedulingDone';

const { Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Screen name='SchedulingDone' component={SchedulingDone} />
    </Navigator>
  );
}
