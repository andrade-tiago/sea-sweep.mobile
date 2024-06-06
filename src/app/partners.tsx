import { Text, View } from "react-native";
import { PartnerList } from "@/components/partner-list"
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <View className="flex-1 bg-dark_blue gap-6 pt-20 px-8 items-center">
      <Text className="text-2xl font-bold text-gray-100">
        Parceiros
      </Text>

      <PartnerList.Root>
        {partners.map((partner, id) => (
          <PartnerList.Item
            key={id}
            title={partner.title}
            description={partner.description}
            image={partner.image}
            invert={id % 2 === 1}
          />
        ))}
      </PartnerList.Root>
    </View>
  )
}
