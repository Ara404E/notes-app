import { Platform } from "react-native";
import { Client, Databases } from "react-native-appwrite";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID,
  },
  iosBundleId: process.env.EXPO_PUBLIC_APP_APPWRITE_BUNDLE_ID,
  androidPackage: process.env.EXPO_PUBLIC_APP_APPWRITE_PACKAGE_NAME,
};

const client = new Client()
  .setEndpoint(config.endpoint ?? "")
  .setProject(config.projectId ?? "");
switch (Platform.OS) {
  case "ios":
    client.setPlatform(config.iosBundleId ?? "");
    break;
  case "android":
    client.setPlatform(config.androidPackage ?? "");
    break;
}

const database = new Databases(client);

export { client, config, database };

