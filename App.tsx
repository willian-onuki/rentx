import 'react-native-gesture-handler';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold, useFonts
} from '@expo-google-fonts/archivo';

import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import theme from './src/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
