import { Text, View } from "react-native";

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <View className="w-full p-8 pt-16 bg-dark_blue">
      <Text className="text-gray-100 text-2xl text-center font-bold">
        {title}
      </Text>
    </View>
  )
}
