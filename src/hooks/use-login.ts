import UserLogin from "@/interfaces/user-login"
import getUserLoginStore from "@/store/get-user-login"
import { useEffect, useState } from "react"

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [loginData, setLoginData] = useState<UserLogin | null>(null)

  useEffect(() => {
    async function loginUser() {
      try {
        const userLogin = await getUserLoginStore()

        if (!userLogin) {
          throw new Error()
        }
        setLoginData(userLogin)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    loginUser()
  }, [])

  return {
    loginData,
    setLoginData,
    isLoading,
    error,
  }
}