import { PermissionsAndroid } from "react-native";
import { debug } from "./utils";

export async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      debug.log("You can access storage");
    } else {
      debug.log("Storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

requestStoragePermission();
