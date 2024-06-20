import useLogin from "@/hooks/use-login";
import Ship from "@/interfaces/ship";
import UserLogin from "@/interfaces/user-login";
import React, { ReactNode, createContext, useState } from "react";

interface AppContextType {
  shipsList: {
    value: Ship[] | null
    setValue: React.Dispatch<React.SetStateAction<Ship[] | null>>
  } | null

  userSession: {
    loginData: UserLogin | null
    setLoginData: React.Dispatch<React.SetStateAction<UserLogin | null>>
    isLoading: boolean
    error: boolean
  } | null
}

export const AppContext = createContext<AppContextType>({
  shipsList: null,
  userSession: null,
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [ships, setShips] = useState<Ship[] | null>(null)
  const userSession = useLogin()

  const value = {
    shipsList: {
      value: ships,
      setValue: setShips,
    },
    userSession,
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}
