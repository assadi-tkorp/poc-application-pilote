import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import { useColorScheme } from '@/hooks/useColorScheme';
import { EventPulseWebsocketType, EventWebsocketType } from '@/interfaces/PulseWebsocketType';
import { MDM_WEBSOCKET_URL } from '@/constants/Networks';
import { pulseWebSocketInstance } from '@/services/instance';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  
  
  if (!loaded) {
    return null;
  }


  const queryClient = new QueryClient()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{  headerShown: false }}>
          <Stack.Screen  name="home"  options={{ title: "Accueil", headerShown: false }} />
          <Stack.Screen name="test" options={{ title:"A propos", headerShown: true }} />
        </Stack>
        </QueryClientProvider>
    </ThemeProvider>
  );
}
