import Button from "@/components/button";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';
import appTitleImg from '@/assets/app-title.png';
import { Input } from "@/components/input";

export default function Register() {
  const [rememberPass, setRememberPass] = useState<boolean>(false)

  return (
    <View className="flex-1 bg-dark_blue justify-center items-center gap-16 p-8">
      <Image
        source={appTitleImg}
        className="h-12 w-full"
        resizeMode="contain"
      />

      <View className="gap-8 w-full">
        <Text className="text-center font-bold text-lg text-gray-100">
          Crie sua conta
        </Text>

        <Input.Root>
          <Input.Field placeholder="E-mail" keyboardType="email-address" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="Senha" keyboardType="visible-password" />
        </Input.Root>

        <View className="flex-row justify-end">
          <View className="flex-row gap-2">
            <Checkbox
              value={rememberPass}
              onValueChange={setRememberPass}
              color={colors.blue}

            />
            <Text className="text-gray-100">
              Lembre-me
            </Text>
          </View>
        </View>

        <Button title="Registrar-se" />

        <Text className="text-center text-gray-500">
          Já tem uma conta?{' '}
          <Link href='/login' className="text-blue font-bold">
            Acesse
          </Link>
        </Text>
      </View>
    </View>
  )
}
