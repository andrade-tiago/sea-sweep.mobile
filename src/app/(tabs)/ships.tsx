import Loading from "@/components/loading";
import { ShipList } from "@/components/ship-list";
import { AppContext } from "@/contexts/app-context";
import { useContext } from "react";
import { ScrollView } from "react-native";

export default function Ships() {
  const { shipsList } = useContext(AppContext)

  if (!shipsList?.value) {
    return <Loading />
  }

  return (
    <ScrollView className="flex-1 px-8 gap-6 bg-dark_blue">
      <ShipList.Root>
        {shipsList.value.map(ship => (
          <ShipList.Item ship={ship} key={ship.id} />
        ))}
      </ShipList.Root>
    </ScrollView>
  )
}
