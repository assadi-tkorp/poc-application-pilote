import { create } from "zustand";
import { createSelectors } from "./helpers";
import {
  AppContentListType,
  AppContentType,
} from "@/interfaces/ApplicationContents";

type UseDevicesConnectedStoreType = {
  collections: AppContentListType;
  selected: AppContentListType;
  count: number;
};
const useDevicesConnectedBase = create<UseDevicesConnectedStoreType>((set) => ({
  collections: [],
  selected: [],
  count: 0,
}));

export const useDevicesConnectedStore = createSelectors(
  useDevicesConnectedBase
);

export const setAppCollection = (values: AppContentListType) => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    collections: values,
    selected: [],
    count: values.length,
  }));
};

export const setSelectedApp = (values?: AppContentListType) => {
  useDevicesConnectedStore.setState((state) => ({
    ...state,
    selected: values,
  }));
};
