import { Image, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import MapView from "react-native-maps";
import ship from '@/assets/ship.png'

export default function ShipDetails() {
  return (
    <View className="flex-1">
      <MapView style={{ width: '100%', height: '100%' }}></MapView>

      <View className="absolute bottom-0 left-0 bg-medium_blue rounded-t-xl w-full">
        <View className="p-6 gap-2">
          <Text className="font-bold text-gray-100 text-lg">
            HMM Algericas
          </Text>
          <View className="flex-row gap-4 items-center">
            <Text className="text-gray-300">
              HCEI37FJ
            </Text>
            <View className="flex-row items-center gap-2">
              <CountryFlag isoCode="de" size={20} />
              <Text className="text-gray-300">
                2020
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-black w-full p-8 rounded-t-2xl flex-row justify-between">
          <View className="gap-2">
            <Text className="text-gray-100 font-bold">
              Origem - Destino
            </Text>
            <Text className="text-gray-300 text-sm">
              38 Toneladas Coletadas
            </Text>
          </View>

          <Image
            source={ship}
            resizeMode="contain"
            className="w-48 border h-40 -mt-28"
          />
        </View>
      </View>
    </View>
  )
}