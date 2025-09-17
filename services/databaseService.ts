import { database } from "./appwrite";

type ListDocumentsParams = {
    dbId: string;
    colId: string;
};

type ListDocumentsSuccess<T = unknown> = {
    data: T[];
};

type ListDocumentsError = {
    error: string;
};

const databaseService = {
    async listDocuments<T = unknown>({ dbId, colId }: ListDocumentsParams): Promise<ListDocumentsSuccess<T> | ListDocumentsError> {
        try {
            const res = await database.listDocuments(dbId, colId);
            const documents = Array.isArray(res?.documents) ? res.documents as T[] : [] as T[];
            return { data: documents };
        } catch (err: any) {
            const message = typeof err?.message === "string" ? err.message : "Unknown error while fetching documents";
            console.error("ERROR FETCHING DOCUMENTS", message);
            return { error: message };
        }
    }
};

export default databaseService;