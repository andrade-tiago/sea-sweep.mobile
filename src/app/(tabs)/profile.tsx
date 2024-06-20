import { Input } from "@/components/input";
import { AppContext } from "@/contexts/app-context";
import { useContext } from "react";
import { View } from "react-native";

export default function Profile() {
  const { userSession } = useContext(AppContext)
  
  return (
    <View className="flex-1 px-8 gap-6 items-center bg-dark_blue">
      <View className="gap-2 w-full">
        <Input.Root>
          <Input.Field
            placeholder="Albert Einstein"
            value={userSession?.loginData?.name}
            editable={false}
          />
        </Input.Root>

        <Input.Root>
          <Input.Field
            placeholder="alberteinstein@email.com"
            keyboardType="email-address"
            value={userSession?.loginData?.email}
            editable={false}
          />
        </Input.Root>

        {/* <Input.Root>
          <Input.Field placeholder="Senha antiga" keyboardType="visible-password" />
        </Input.Root> */}

        {/* <Input.Root>
          <Input.Field placeholder="Senha nova" keyboardType="visible-password" />
        </Input.Root> */}
      </View>

      {/* <Button title="Atualizar" /> */}
    </View>
  )
}