import '@/styles/global.css'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { colors } from '@/styles/colors'
import { AppProvider } from '@/contexts/app-context'

export default function Layout() {
  return (
    <>
      <StatusBar style='light' />

      <AppProvider>
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
          <Stack.Screen name="ship-details/[id]" options={{ title: 'Detalhes do Navio' }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
      </AppProvider>
    </>
  )
}
