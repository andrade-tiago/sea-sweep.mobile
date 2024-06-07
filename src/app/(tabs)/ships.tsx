import { ShipList } from "@/components/ship-list";
import { ScrollView } from "react-native";

export default function Ships() {
  return (
    <ScrollView className="flex-1 px-8 gap-6 bg-dark_blue">
      <ShipList.Root>
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
        <ShipList.Item />
      </ShipList.Root>
    </ScrollView>
  )
}
