import '@/styles/global.css'
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow'
import Loading from '@/components/loading'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { colors } from '@/styles/colors'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
  })

  return (
    <>
      <StatusBar style='light' />

      {fontsLoaded ? (
        <Stack screenOptions={{
          headerStyle: {
            backgroundColor: colors.dark_blue,
          },
          headerTintColor: '#CCC',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#CCC',
          },
        }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="ship-details" options={{ title: 'Detalhes do Navio' }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <Loading />
      )}
    </>
  )
}
