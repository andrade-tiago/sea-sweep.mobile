import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import Ship from "@/interfaces/ship";

interface ShipListItemProps {
  ship: Ship
}

export default function ShipListItem({ ship }: ShipListItemProps) {
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center border-b-[1px] border-gray-500 py-3"
      onPress={() => router.push(`/ship-details/${ship.id}`)}
      activeOpacity={.5}
    >
      <View className="gap-2">
        <Text className="text-gray-100 font-bold text-lg">
          {ship.shipName}
        </Text>
        <Text className="text-gray-300">
          {ship.IMO}
        </Text>
      </View>

      <MaterialIcons name="arrow-forward-ios" color='#CCC' size={20} />
    </TouchableOpacity>
  )
}
