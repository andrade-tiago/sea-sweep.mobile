import { ReactNode } from "react";
import { View } from "react-native";

interface InputRootProps {
  children: ReactNode
}

export default function InputRoot({ children }: InputRootProps) {
  return (
    <View className="w-full border border-gray-300 rounded-xl flex-row gap-2 justify-between p-2">
      { children }
    </View>
  )
}
