import { Text, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function ShipListHeader() {
  return (
    <View className="flex-row justify-between mb-4">
      <Text className="text-gray-300">
        Ver mais
      </Text>
      <Entypo name="dots-three-horizontal" color='#CCC' size={12} />
    </View>
  )
}
