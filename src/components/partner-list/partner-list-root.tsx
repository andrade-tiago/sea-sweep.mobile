import { ReactNode } from "react";
import { View } from "react-native";

interface PartnerListRoot {
  children: ReactNode
}

export default function PartnerListRoot({ children }: PartnerListRoot) {
  return (
    <View className="w-full gap-4">
      {children}
    </View>
  )
}
