import UserRegister from "@/interfaces/user-register";
import { api } from "./api";

export default async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const registerResponse = await api.post<UserRegister>('/auth/register', {
    name,
    email,
    password,
  })

  return registerResponse.data
}
