import { Text, View } from "react-native";

type Note = {
  $id?: string;
  id?: string;
  text: string;
};

export default function NoteItem({ note }: Readonly<{ note: Note }>) {
  return (
    <View className="flex-row justify-between bg-gray-200 p-4 rounded-md my-2">
      <Text className="text-md">{note.text}</Text>
      <Text className="text-sm text-red-600">X</Text>
    </View>
  );
}
