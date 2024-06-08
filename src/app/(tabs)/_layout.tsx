import { colors } from '@/styles/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs, router } from 'expo-router';
import { getHeaderTitle } from '@react-navigation/elements'
import Header from '@/components/header';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/contexts/app-context';
import Loading from '@/components/loading';
import getUserLoginStore from '@/store/get-user-login';
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
    ships, setShips,
    userSession, setUserSession
  } = useContext(AppContext)
  const [ isLoadingUser, setIsLoadingUser ] = useState<boolean>(true)

  useEffect(() => {
    async function loginUser() {
      if (!userSession) {
        const userLogin = await getUserLoginStore()

        if (userLogin) {
          setUserSession(userLogin)
        }
      }
      setIsLoadingUser(false)
    }
    loginUser()
  }, [])

  useEffect(() => {
    async function ships() {
      try {
        console.warn('tab-layout: tentei obter os navios')

        if (userSession) {
          const shipsList = await getShips(userSession.token)
          setShips(shipsList)
        } else {
          console.warn('tab-layout: não tinha usuário pra eu pegar os navios :/')
        }
      } catch {
        Alert.alert('Não foi possível carregar a lista de embarcações')
      }
    }
    ships()
  }, [userSession])

  if (!fontsLoaded || isLoadingUser) {
    console.warn('tab-layout: carregando fontes e buscando usuário')
    return <Loading />
  }
  if (!userSession) {
    console.warn('tab-layout: faz login aí')
    router.push('/login')
  }
  if (!ships) {
    console.warn('tab-layout: não tem navios T-T')
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
