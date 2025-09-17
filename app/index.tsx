import { Image, TouchableOpacity, View } from "react-native";

import notesIcon from "@/assets/images/notes.png";
import Heading from "@/components/Heading";
import Subtitle from "@/components/Subtitle";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex justify-center items-center flex-col flex-1 gap-5">
      <Image source={notesIcon} className="h-20 w-20" />
      <Heading> Welcome To Notes App </Heading>
      <Subtitle>Capture your thoughts anytime, anywhere</Subtitle>

      <TouchableOpacity
        className="rounded-lg p-4 bg-orange-400"
        onPress={() => router.push("/notes")}
      >
        <Heading className="text-center text-white">Get Started</Heading>
      </TouchableOpacity>
    </View>
  );
}
