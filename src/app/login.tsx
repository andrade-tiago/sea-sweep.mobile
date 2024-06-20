import Button from "@/components/button";
import { colors } from "@/styles/colors";
import { Link, router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';
import appTitleImg from '@/assets/app-title.png';
import { Input } from "@/components/input";
import { useContext, useState } from "react";
import { AppContext } from "@/contexts/app-context";
import loginUser from "@/services/login-user";
import setUserLoginStore from "@/store/set-user-login";

export default function Login() {
  const { userSession } = useContext(AppContext)
  const [rememberPass, setRememberPass] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleLogin() {
    try {
      setIsLoading(true)

      const login = await loginUser(email, password)
      await setUserLoginStore(login)
      userSession?.setLoginData(login)

      router.replace('/')
    } catch {
      Alert.alert('Não foi possível realizar o login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className="flex-1 bg-dark_blue justify-center items-center gap-16 p-8">
      <Image
        source={appTitleImg}
        className="h-12 w-full"
        resizeMode="contain"
      />

      <View className="gap-8 w-full">
        <Text className="text-center font-bold text-lg text-gray-100">
          Acesse sua conta
        </Text>

        <Input.Root>
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
            editable={!isLoading}
          />
        </Input.Root>

        <Input.Root>
          <Input.Field
            placeholder="Senha"
            keyboardType="visible-password"
            onChangeText={setPassword}
            editable={!isLoading}
          />
        </Input.Root>

        <View className="flex-row justify-between">
          <Text className="text-gray-100">
            Esqueci minha senha
          </Text>

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

        <Button title="Acessar" isLoading={isLoading} onPress={handleLogin} />

        <Text className="text-center text-gray-500">
          Ainda não tem uma conta?{' '}
          <Link href='/register' className="text-blue font-bold">
            Cadastre-se
          </Link>
        </Text>
      </View>
    </View>
  )
}
