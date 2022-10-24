import React, { useCallback } from 'react';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import theme from './src/styles/theme';
import AppLoading from 'expo-app-loading';
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
        <Scheduling />
    </ThemeProvider>
  )
}
