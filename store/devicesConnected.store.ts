import { create } from "zustand";
import { createSelectors } from "./helpers.store";
import { DevicesConnectedListType, DevicesConnectedType } from "@/interfaces/DevicesConnected.interface";

type UseDevicesConnectedStoreType = {
  collections: DevicesConnectedListType;
  selected: DevicesConnectedListType;
  count: number;
};
const useDevicesConnectedBase = create<UseDevicesConnectedStoreType>((set) => ({
  collections: [],
  selected: [],
  count: 0,
}));

export const useDevicesConnectedStore = createSelectors(useDevicesConnectedBase);

export const setDeviceConnectedCollection = (values: DevicesConnectedListType) => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    collections: values,
    count: values.length,
  }));
};
/**
 * Selection d'un appareils
 * @param value
 */
export const setSelectOneDeviceConnected = (value: DevicesConnectedType) => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    selected: [value],
  }));
};

/**
 * Selection multiple d'appareil
 * @param value
 */
export const setSelectedDeviceConnected = (value: DevicesConnectedType) => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    selected: [value, ...state.selected],
  }));
};

/**
 * Suppression d'un ou plusieurs appareil sélectionné
 * @param {Array<string>} targets tableau contenant les ip du device
 */
export const removeSelectedDeviceConnected = (targets: Array<string>) => {
  const currentCollection = [...useDevicesConnectedStore.getState().selected];
  const filteredCollection = currentCollection.filter((item) => !targets.includes(item.target));
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    selected: filteredCollection,
  }));
};

export const removeAllSelectedDeviceConnected = () => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    selected: [],
  }));
};
