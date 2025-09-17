import { ReactNode } from "react";
import { Text } from "react-native";

export default function Subtitle({  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
    return (
        <Text className={`text-lg font-semibold ${className}`}>
            {children}
        </Text>
    )
}