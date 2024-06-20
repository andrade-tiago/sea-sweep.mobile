import { colors } from '@/styles/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Redirect, Tabs } from 'expo-router';
import { getHeaderTitle } from '@react-navigation/elements'
import Header from '@/components/header';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/contexts/app-context';
import Loading from '@/components/loading';
import {
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
  useFonts,
} from '@expo-google-fonts/barlow';
import getShips from '@/services/get-ships';
import { Alert } from 'react-native';

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
  })
  const {
    shipsList,
    userSession,
  } = useContext(AppContext)

  useEffect(() => {
    async function loadShips() {
      try {
        if (shipsList?.value) {
          return
        }
        if (userSession?.loginData) {
          const ships = await getShips(userSession.loginData.token)
          shipsList?.setValue(ships)
        }
      } catch {
        Alert.alert('Não foi possível carregar a lista de embarcações')
      }
    }
    loadShips()
  }, [userSession])

  if (!fontsLoaded || userSession?.isLoading) {
    return <Loading />
  }
  if (!userSession?.loginData) {
    return <Redirect href="/login" />
  }
  if (!shipsList?.value) {
    return <Loading />
  }
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.blue,
      tabBarStyle: {
        backgroundColor: '#000',
        borderBlockColor: '#000',
        height: 80,
      },
      header: ({ route, options }) => {
        const title = getHeaderTitle(options, route.name);
      
        return <Header title={title} />
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ships"
        options={{
          title: 'Navios',
          tabBarIcon: ({ color }) => <FontAwesome5 name="ship" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="partners"
        options={{
          title: 'Parceiros',
          tabBarIcon: ({ color }) => <FontAwesome6 name="recycle" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user-circle" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
