import Ship from "@/interfaces/ship";
import UserLogin from "@/interfaces/user-login";
import React, { ReactNode, createContext, useState } from "react";

interface AppContextType {
  ships: Ship[] | null
  setShips: React.Dispatch<React.SetStateAction<Ship[] | null>>

  userSession: UserLogin | null
  setUserSession: React.Dispatch<React.SetStateAction<UserLogin | null>>
}

export const AppContext = createContext<AppContextType>({
  ships: null, setShips: () => {},
  userSession: null, setUserSession: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [ships, setShips] = useState<Ship[] | null>(null)
  const [userSession, setUserSession] = useState<UserLogin | null>(null)

  return (
    <AppContext.Provider value={{
      ships, setShips,
      userSession, setUserSession,
    }}>
      { children }
    </AppContext.Provider>
  )
}
