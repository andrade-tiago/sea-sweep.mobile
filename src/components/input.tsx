import { TextInput, TextInputProps, View } from "react-native";

interface RootProps extends TextInputProps {
}

export default function Input({
  ...props
}: RootProps) {
  return (
    <View className="p-4 block w-full rounded-lg border-b-2 border-gray-950/10 border-x-2">
      <TextInput placeholderClassName="text-gray-500" {...props} />
    </View>
  )
}
