import {
  MockMovieInterface,
  MockMovieListInterface,
} from "@/interfaces/MockMoviContent";
import { create, createStore } from "zustand";
import { createSelectors } from "./helpers";

type UseContentStoreType = {
  collections: MockMovieListInterface;
  selected: MockMovieInterface | null;
};
const useContentStoreBase = create<UseContentStoreType>((set) => ({
  collections: [],
  selected: null,
}));

export const useContentStore = createSelectors(useContentStoreBase);

/**
 * Insertion des contenus
 * @param {MockMovieListInterface} values
 */
export const setContentCollections = (values: MockMovieListInterface): void => {
  useContentStore.setState((state) => ({
    ...state,
    collections: values,
    selected: values[0],
  }));
};

/**
 * Mise à d'un contenus dans la collection
 * @param {MockMovieInterface} values
 */
export const updateContentCollections = (values: MockMovieInterface): void => {
  const oldCollection = structuredClone(useContentStore.getState().collections);
  const newCollection = oldCollection.map((item) => {
    if (item.id === values.id) {
      return { ...item, ...values };
    }
    return item;
  });

  useContentStore.setState((state) => ({
    ...state,
    collections: newCollection,
  }));
};

/**
 * Mise à jour du contenus sélectionné
 * @param  {MockMovieInterface} values values
 */
export const setSelectedContent = (values?: MockMovieInterface) => {
  useContentStore.setState((state) => ({ ...state, selected: values }));
};
