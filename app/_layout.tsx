import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
    </Stack>
  );
}
