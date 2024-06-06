import '@/styles/global.css'
import { Slot } from 'expo-router'
import {
  useFonts,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow'
import Loading from '@/components/loading'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
  })

  return (
    <>
      <StatusBar style='light' />
      {fontsLoaded ? <Slot /> : <Loading />}
    </>
  )
}
