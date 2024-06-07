import { VariantProps, tv } from "tailwind-variants";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

const button = tv({
  base: 'rounded-xl p-5 w-full',
  variants: {
    color: {
      blue: 'bg-blue',
      white: 'bg-gray-100',
    }
  },
  defaultVariants: {
    color: 'blue',
  },
})

const text = tv({
  base: 'text-center font-bold',
  variants: {
    color: {
      blue: 'text-gray-100',
      white: 'text-dark_blue'
    },
  },
  defaultVariants: {
    color: 'blue'
  }
})

type ButtonProps = VariantProps<typeof button> & VariantProps<typeof text> & TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export default function Button({ color, title, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={button({ color })}
      disabled={isLoading}
      activeOpacity={0.9}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className={text({ color })}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
