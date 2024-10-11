import { create } from "zustand";
import { createSelectors } from "./helpers.store";
import { AppContentListType, AppContentType } from "@/interfaces/ApplicationContents";

type UseApplicationContentStoreType = {
  collections: AppContentListType;
  selected: AppContentType | null;
  count: number;
};
const useAppContentStoreBase = create<UseApplicationContentStoreType>((set) => ({
  collections: [],
  selected: null,
  count: 0,
}));

export const useAppContentStore = createSelectors(useAppContentStoreBase);

export const setAppCollection = (values: AppContentListType) => {
  useAppContentStore.setState((state) => ({
    ...state,
    collections: values,
    count: values.length,
  }));
};

export const setSelectedApp = (values?: AppContentType) => {
  useAppContentStore.setState((state) => ({ ...state, selected: values }));
};
