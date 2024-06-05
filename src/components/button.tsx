import { VariantProps, tv } from "tailwind-variants";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

const button = tv({
  base: 'rounded-xl p-5',
  variants: {
    size: {
      normal: 'w-max',
      full: 'w-full',
    },
    color: {
      dark: 'bg-dark',
      light: 'bg-gray-100',
    }
  },
  defaultVariants: {
    size: 'full',
    color: 'dark',
  },
})

const text = tv({
  base: 'text-center font-bold text-xl',
  variants: {
    color: {
      dark: 'text-gray-100',
      light: 'text-dark'
    },
  },
  defaultVariants: {
    color: 'dark'
  }
})

type ButtonProps = VariantProps<typeof button> & VariantProps<typeof text> & TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export default function Button({ size, color, title, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={button({ size, color })}
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
