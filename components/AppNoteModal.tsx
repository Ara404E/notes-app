import {
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Heading from "./Heading";

export default function AppNoteModal({
  showModal,
  setShowModal,
  newNote,
  setNewNote,
  addNote,
}: Readonly<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  newNote: string;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
  addNote: () => void;
}>) {
  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent
      onRequestClose={() => setShowModal(false)}
    >
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: undefined })}
        className="flex-1 justify-center items-center bg-black/60"
      >
        <View className="w-[92%] max-w-md rounded-xl bg-white p-5">
          <Heading>Add a New Note</Heading>

          <TextInput
            className="mt-3 border border-gray-300 rounded-md p-3"
            placeholder="Enter note..."
            value={newNote}
            onChangeText={setNewNote}
          />

          <View className="mt-4 flex-row gap-3">
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              className="flex-1 items-center justify-center rounded-md bg-gray-200 p-3"
            >
              <Heading>Cancel</Heading>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={addNote}
              className="flex-1 items-center justify-center rounded-md bg-blue-600 p-3"
            >
              <Heading className="text-white">Add Note</Heading>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
