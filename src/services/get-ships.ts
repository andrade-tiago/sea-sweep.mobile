import Ship from "@/interfaces/ship";
import { api } from "./api";

export default async function getShips(
  token: string,
) {
  const getShipsResponse = await api.get<Ship[]>('/ships', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return getShipsResponse.data
}
