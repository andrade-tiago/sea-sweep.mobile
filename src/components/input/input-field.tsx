import { TextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

export default function InputField({ className, ...props }: TextInputProps) {
  return (
    <TextInput
      className={twMerge(
        'text-gray-100 w-full p-2',
        className,
      )}
      placeholderTextColor="#999"
      {...props}
    />
  )
}
