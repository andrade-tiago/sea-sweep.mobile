import { Image, Text, View } from "react-native";
import shipImg from '@/assets/ship-draw.png'
import CountryFlag from "react-native-country-flag";
import MapView, { Marker } from "react-native-maps";
import { ShipList } from "@/components/ship-list";
import { PieChart } from "react-native-gifted-charts";
import { colors } from "@/styles/colors";

export default function Home() {
  const collectedWasteKilos = 380

  return (
    <View className="flex-1 items-center gap-4 px-8 bg-dark_blue">
      <View className="bg-medium_blue/30 rounded-xl gap-2 w-full p-5">
        <Image
          source={shipImg}
          className="w-full h-48"
          resizeMode="contain"
        />

        <Text className="font-bold text-xl text-gray-100">
          HMM Algericas
        </Text>

        <View className="flex-row justify-between">
          <Text className="text-gray-300">
            IMO9863297
          </Text>
          <View className="flex-row gap-2">
            <CountryFlag isoCode="co" size={20} />
            <Text className="text-gray-300">
              2020
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

        <ShipList.Item />
        <ShipList.Item />
      </ShipList.Root>
    </View>
  )
}
