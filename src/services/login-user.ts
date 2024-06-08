import UserLogin from "@/interfaces/user-login";
import { api } from "./api";

export default async function loginUser(
  email: string,
  password: string,
) {
  const loginResponse = await api.post<UserLogin>('/auth/login', {
    email,
    password,
  })

  return loginResponse.data
}
