import { Text, View } from "react-native";
import { PartnerList } from "@/components/partner-list"
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <View className="flex-1 bg-dark_blue gap-6 px-8 items-center">
      <PartnerList.Root>
        {partners.map((partner, index) => (
          <PartnerList.Item
            key={index}
            title={partner.title}
            description={partner.description}
            image={partner.image}
            invert={index % 2 === 1}
          />
        ))}
      </PartnerList.Root>
    </View>
  )
}
