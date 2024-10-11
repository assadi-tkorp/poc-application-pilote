import { create } from "zustand";
import { createSelectors } from "./helpers.store";
import { variantsMediaType } from "@/interfaces/themes";

type UseGlobalType = {
  mediaSelected: variantsMediaType;
};
const useGlobalStoreBase = create<UseGlobalType>((set) => ({
  mediaSelected: "application",
}));

export const useGlobalStore = createSelectors(useGlobalStoreBase);

export const setMediaSelected = (values: variantsMediaType) => {
  useGlobalStore.setState((state) => ({
    ...state,
    mediaSelected: values,
  }));
};
