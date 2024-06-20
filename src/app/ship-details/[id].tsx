import { Image, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import MapView, { Marker } from "react-native-maps";
import shipImg from '@/assets/ship.png'
import { useContext } from "react";
import { AppContext } from "@/contexts/app-context";
import { useLocalSearchParams } from "expo-router";
import Loading from "@/components/loading";

export default function ShipDetails() {
  const { shipsList } = useContext(AppContext)
  const { id } = useLocalSearchParams() as { id: string }

  if (!shipsList?.value) {
    return <Loading />
  }

  const ship = shipsList.value.find(ship => ship.id === id)

  if (!ship) {
    return <Loading />
  }

  const originCoordinate = ship.originPort.split(', ').map(c => Number(c))
  const destinationCoordinate = ship.destinationPort.split(', ').map(c => Number(c))
  const coordinate = {
    latitude: (originCoordinate[1] + destinationCoordinate[1]) / 2,
    longitude: (originCoordinate[0] + destinationCoordinate[0]) / 2,
  }

  return (
    <View className="flex-1">
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{ ...coordinate, latitudeDelta: 50, longitudeDelta: 501 }}>
        <Marker title={ship.shipName} coordinate={coordinate} />
      </MapView>

      <View className="absolute bottom-0 left-0 bg-medium_blue rounded-t-xl w-full">
        <View className="p-6 gap-2">
          <Text className="font-bold text-gray-100 text-lg">
            {ship.shipName}
          </Text>
          <View className="flex-row gap-4 items-center">
            <Text className="text-gray-300">
              {ship.IMO}
            </Text>
            <View className="flex-row items-center gap-2">
              <CountryFlag isoCode={ship.flag} size={20} />
              <Text className="text-gray-300">
                {new Date(ship.createdAt).getFullYear()}
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-black w-full p-8 rounded-t-2xl flex-row gap-3 justify-between">
          <View className="gap-2 flex-1">
            <Text className="text-gray-100 font-bold">
              {ship.originPortName} - {ship.destinationPortName}
            </Text>
            <Text className="text-gray-300 text-sm">
              {ship.tonnage} Toneladas Coletadas
            </Text>
          </View>

          <Image
            source={shipImg}
            resizeMode="contain"
            className="border h-40 -mt-28 flex-1"
          />
        </View>
      </View>
    </View>
  )
}