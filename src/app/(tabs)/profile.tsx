import Button from "@/components/button";
import { Input } from "@/components/input";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 px-8 gap-6 items-center bg-dark_blue">
      <View className="gap-2 w-full">
        <Input.Root>
          <Input.Field placeholder="Albert Einstein" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="alberteinstein@email.com" keyboardType="email-address" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="Senha antiga" keyboardType="visible-password" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="Senha nova" keyboardType="visible-password" />
        </Input.Root>
      </View>

      <Button title="Atualizar" />
    </View>
  )
}