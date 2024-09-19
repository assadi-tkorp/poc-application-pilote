import { DevicesConnectedType } from "@/interfaces/DevicesConnected.interface";
import { setDeviceConnectedCollection } from "@/store/devicesConnected.store";
import uuid from "react-native-uuid";
type SnapshotDevice = DevicesConnectedType & {
  ip: string;
};

export const generateSnapshotDevice = (item: SnapshotDevice) => {
  return {
    id: item?.id || String(uuid.v1()),
    androidId: item?.androidId || "AndroidId inconnu",
    target: item?.target || "Adresse IP inconnu",
    model: item?.model || "Model de l'appareil inconnu",
    typeDevice: item?.typeDevice || "unknown",
  };
};

export const generateCleanListeDevices = (devices: SnapshotDevice[]) => {
  const cleanDevices = devices.map((item) => {
    item.target = item?.ip;
    return generateSnapshotDevice(item);
  });
  return cleanDevices;
};

export const generateListDevice = (devices: SnapshotDevice[]) => {
  console.log("device -> ", devices);
  const cleanDevices = generateCleanListeDevices(devices);
  setDeviceConnectedCollection(cleanDevices);
};
