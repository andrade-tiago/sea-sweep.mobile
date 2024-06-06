import { Image, Text, View } from "react-native";
import shipImg from '@/assets/ship-draw.png'
import CountryFlag from "react-native-country-flag";
import MapView, { Marker } from "react-native-maps";
import { ShipList } from "@/components/ship-list";

export default function Home() {
  return (
    <View className="flex-1 items-center gap-6 pt-20 px-8 bg-dark_blue">
      <Text className="text-2xl font-bold text-gray-100">
        Home
      </Text>

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

      <View className="flex-row justify-between w-full gap-4">
        <View className="bg-medium_blue/30 rounded-xl flex-grow aspect-square">
        </View>

        <View className="bg-medium_blue/30 rounded-xl flex-grow overflow-hidden aspect-square">
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
