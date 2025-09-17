import AppNoteModal from "@/components/AppNoteModal";
import Heading from "@/components/Heading";
import NoteList from "@/components/NoteList";
import Skeleton from "@/components/Skeleton";
import noteService from "@/services/noteService";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";

const NoteScreen = () => {
  type Note = { $id?: string; id?: string; text: string };
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    setLoading(true);
    const res = await noteService.getNotes();
    if (res.error) {
      setError(res.error);
      Alert.alert("Error", res.error);
    } else {
      setNotes(res.data as Note[]);
      setError(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = () => {
    if (newNote.trim() === "") return;

    setNotes((prev) => [...prev, { id: Date.now().toString(), text: newNote }]);

    setNewNote("");
    setShowModal(false);
  };

  return (
    <View className="flex-1">
      <Heading>Notes</Heading>
      {loading ? (
        <View className="flex-col gap-4">
          <Skeleton className="w-48 h-6" />
          <Skeleton className="w-48 h-6" />
        </View>
      ) : (
        <NoteList notes={notes} />
      )}
      <TouchableOpacity
        className="absolute left-5 right-5 bottom-5 bg-pink-300 p-5 rounded-lg items-center"
        onPress={() => setShowModal(true)}
      >
        <Heading className="text-white">+ Add Notes</Heading>
      </TouchableOpacity>
      <AppNoteModal
        showModal={showModal}
        setShowModal={setShowModal}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

export default NoteScreen;
