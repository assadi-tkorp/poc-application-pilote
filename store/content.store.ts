import {
  MockMovieInterface,
  MockMovieListInterface,
} from "@/interfaces/MockMoviContent";
import { create, createStore } from "zustand";
import { createSelectors } from "./helpers";

type UseContentStoreType = {
  collections: MockMovieListInterface;
  selected: MockMovieInterface | null;
  count: number;
};
const useContentStoreBase = create<UseContentStoreType>((set) => ({
  collections: [],
  selected: null,
  count: 0,
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
    count: values.length,
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
