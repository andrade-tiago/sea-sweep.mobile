import { colors } from '@/styles/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import { getHeaderTitle } from '@react-navigation/elements'
import Header from '@/components/header';
import Octicons from '@expo/vector-icons/Octicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
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
