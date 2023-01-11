import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../global/routes';
import { Home } from '../screens/Home';
import { SchedulingDone } from '../screens/SchedulingDone';
import PeopleSvg from '../assets/people_tab_nav.svg';
import CarSvg from '../assets/car.svg';
import HouseSvg from '../assets/house.svg';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Profile } from '../screens/Profile';

const { Screen, Navigator } = createBottomTabNavigator<HomeTabParamList>();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background_primary,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
        },
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HouseSvg
              width={24}
              height={24}
              fill={color}
            />
          ),
        }}
      />
      <Screen
        name='SchedulingDone'
        component={SchedulingDone}
        options={{
          tabBarIcon: ({ color }) => {
            return <CarSvg
              width={24}
              height={24}
              fill={color}
            />
          },
        }}
      />
      <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg
              width={24}
              height={24}
              fill={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
