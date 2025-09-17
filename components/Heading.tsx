import { ReactNode } from "react";
import { Text } from "react-native";

export default function Heading({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
    return (
        <Text className={`text-2xl font-bold ${className}`}>
            {children}
        </Text>
    )
}
