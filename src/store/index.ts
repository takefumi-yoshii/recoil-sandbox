import { storeFactory, getOrCreateStore } from "./factories";
import { StoreState } from "./types";
export * from "./types";
export * from "./mock";
// ______________________________________________________
//
export let store = storeFactory();
export const restore = (initialStoreState: Partial<StoreState> = {}) => {
  store = getOrCreateStore(initialStoreState);
};
