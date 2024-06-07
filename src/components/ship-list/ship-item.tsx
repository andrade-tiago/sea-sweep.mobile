import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function ShipListItem() {
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center border-b-[1px] border-gray-500 py-3"
      onPress={() => router.push('/ship-details')}
      activeOpacity={.5}
    >
      <View className="gap-2">
        <Text className="text-gray-100 font-bold text-lg">
          HMM Algericas
        </Text>
        <Text className="text-gray-300">
          SDFH2346
        </Text>
      </View>

      <MaterialIcons name="arrow-forward-ios" color='#CCC' size={20} />
    </TouchableOpacity>
  )
}