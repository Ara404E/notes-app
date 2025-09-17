import databaseService from "./databaseService";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID ?? "";
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID ?? "";

const noteService = {
    async getNotes() {
        const res = await databaseService.listDocuments({ dbId, colId });
        if ("error" in res) {
            return { error: res.error };
        }
        return { data: res.data };
    }
};

export default noteService