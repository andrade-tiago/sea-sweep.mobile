import Button from "@/components/button";
import { colors } from "@/styles/colors";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';
import appTitleImg from '@/assets/app-title.png';
import { Input } from "@/components/input";
import registerUser from "@/services/register-user";
import loginUser from "@/services/login-user";
import { AppContext } from "@/contexts/app-context";
import setUserLoginStore from "@/store/set-user-login";

export default function Register() {
  const { setUserSession } = useContext(AppContext)
  const [rememberPass, setRememberPass] = useState<boolean>(false)
  const [ name, setName ] = useState<string>("")
  const [ email, seEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  async function handlerRegister() {
    try {
      setIsLoading(true)
      await registerUser(name, email, password)
      console.warn('register: registrei 8)')

      const login = await loginUser(email, password)
      console.warn('register: loguei :D')
      await setUserLoginStore(login)
      console.warn('register: guardei login')
      setUserSession(login)
      console.warn('register: logado :)')

      router.push('/')
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
          Crie sua conta
        </Text>

        <Input.Root>
          <Input.Field
            placeholder="Nome"
            onChangeText={setName}
            editable={!isLoading}
          />
        </Input.Root>

        <Input.Root>
          <Input.Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={seEmail}
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

        <View className="flex-row justify-end">
          <View className="flex-row gap-2">
            <Checkbox
              value={rememberPass}
              onValueChange={setRememberPass}
              color={colors.blue}
              disabled={isLoading}
            />

            <Text className="text-gray-100">
              Lembre-me
            </Text>
          </View>
        </View>

        <Button title="Registrar-se" isLoading={isLoading} onPress={handlerRegister} />

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
