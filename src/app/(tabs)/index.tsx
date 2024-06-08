import { Image, Text, View } from "react-native";
import shipImg from '@/assets/ship-draw.png'
import CountryFlag from "react-native-country-flag";
import MapView, { Marker } from "react-native-maps";
import { ShipList } from "@/components/ship-list";
import { PieChart } from "react-native-gifted-charts";
import { colors } from "@/styles/colors";
import { useContext } from "react";
import { AppContext } from "@/contexts/app-context";
import Loading from "@/components/loading";

export default function HomeScreen() {
  const collectedWasteKilos = 380
  const { ships } = useContext(AppContext)

  if (!ships || !ships[0]) {
    console.log('home: Nenhum navio :/')
    return <Loading />
  }

  return (
    <View className="flex-1 items-center gap-4 px-8 bg-dark_blue">
      <View className="bg-medium_blue/30 rounded-xl gap-2 w-full p-5">
        <Image
          source={shipImg}
          className="w-full h-48"
          resizeMode="contain"
        />

        <Text className="font-bold text-xl text-gray-100">
          {ships[0].shipName}
        </Text>

        <View className="flex-row justify-between">
          <Text className="text-gray-300">
          {ships[0].IMO}
          </Text>
          <View className="flex-row gap-2">
            <CountryFlag isoCode={ships[0].flag} size={20} />
            <Text className="text-gray-300">
              {new Date(ships[0].createdAt).getFullYear()}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between w-full gap-4 max-h-56">
        <View className="bg-medium_blue/30 rounded-xl flex-1 items-center justify-center gap-2">
          <PieChart
            donut
            data={[
              { value: collectedWasteKilos / 10 * 2, color: colors.blue },
              { value: 100 - (collectedWasteKilos / 10 * 2), color: '#CCC' },
            ]}
            radius={50}
            innerCircleColor={colors.dark_blue}
          />
          <Text className="text-gray-100">
            {collectedWasteKilos} Kg
          </Text>
          <Text className="text-gray-100">
            Coletados
          </Text>
        </View>

        <View className="bg-medium_blue/30 rounded-xl flex-1 overflow-hidden">
          <MapView style={{ width: '100%', height: '100%' }}>
            {/* <Marker /> */}
          </MapView>
        </View>
      </View>

      <ShipList.Root>
        <ShipList.Header />

        {ships.slice(0, 2).map(ship => (
          <ShipList.Item ship={ship} key={ship.id} />
        ))}
      </ShipList.Root>
    </View>
  )
}
