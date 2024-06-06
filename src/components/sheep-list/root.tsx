import { ReactNode } from "react";
import { View } from "react-native";

interface ShipListRootProps {
  children: ReactNode
}

export default function ShipListRoot({ children }: ShipListRootProps) {
  return (
    <View className="p-6 bg-medium_blue/30 rounded-lg w-full">
      {children}
    </View>
  )
}
