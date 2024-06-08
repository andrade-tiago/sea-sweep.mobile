import UserLogin from "@/interfaces/user-login";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getUserLoginStore(): Promise<UserLogin | null> {
  try {
    const jsonValue = await AsyncStorage.getItem('user-login')

    if (!jsonValue) {
      throw new Error()
    }
    return JSON.parse(jsonValue)
  } catch {
    return null
  }
}
