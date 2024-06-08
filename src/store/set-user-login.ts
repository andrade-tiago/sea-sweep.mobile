import UserLogin from "@/interfaces/user-login";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setUserLoginStore(user: UserLogin): Promise<boolean> {
  try {
    await AsyncStorage.setItem('user-login', JSON.stringify(user))

    return true
  } catch {
    return false
  }
}
