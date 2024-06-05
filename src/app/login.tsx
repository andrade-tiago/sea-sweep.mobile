import Button from "@/components/button";
import Input from "@/components/input";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import Checkbox from 'expo-checkbox'
import image from '@/assets/title.png'

export default function Login() {
  const [rememberPass, setRememberPass] = useState<boolean>(false)

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center gap-16 p-8">
      <Image
        source={image}
        className="h-24 border w-full"
        resizeMode="contain"
      />

      <View className="gap-8 w-full">
        <Text className="text-center font-bold text-dark">
          Acesse sua conta
        </Text>

        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />

        <View className="flex-row justify-between">
          <Text>
            Esqueci minha senha
          </Text>

          <View className="flex-row gap-2">
            <Checkbox
              value={rememberPass}
              onValueChange={setRememberPass}
              color={rememberPass ? colors.dark : undefined}
            />
            <Text>Lembre-me</Text>
          </View>
        </View>

        <Button title="Acessar" />

        <Text className="text-center text-gray-500">
          Ainda não tem uma conta?{' '}
          <Link href='/register' className="text-sky-800 font-bold">
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  )
}
