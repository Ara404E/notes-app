import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

type Note = {
    $id?: string;
    id?: string;
    text: string;
};

export default function NoteList({ notes }: Readonly<{ notes: Note[] }>) {
    return (
           <View className="flex-1 p-5">
                <FlatList
                  data={notes}
                  keyExtractor={(item) => item.$id ?? item.id ?? String(Math.random())}
                  renderItem={({ item }) => <NoteItem note={item} />}
                />
              </View>
    )
}