import Partner from "@/interfaces/partner";
import { Image, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface PartnerListItemProps extends Partner {
  invert?: boolean
}

export default function PartnerListItem({ title, description, image, invert }: PartnerListItemProps) {
  const texts = (
    <View className="gap-2 flex-1">
      <Text className={twMerge(
        "text-gray-300 w-full",
        invert ? 'text-right' : null
      )}>
        { title }
      </Text>
      <Text className={twMerge(
        "text-gray-300 w-full",
        invert ? 'text-right' : null
      )}>
        { description }
      </Text>
    </View>
  )

  const partnerImage = (
    <Image
      source={image}
      className="flex-1 h-28 border scale-110"
      resizeMode="contain"
    />
  )

  return (
    <View className="bg-medium_blue/30 flex-row justify-between p-5 gap-5 rounded-xl">
      {invert ? (
        <>
          {partnerImage}
          {texts}
        </>
      ): (
        <>
          {texts}
          {partnerImage}
        </>
      )}
    </View>
  )
}
