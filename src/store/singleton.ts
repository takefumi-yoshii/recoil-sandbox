import { createStore } from "./factories";
import type { Store } from "./types";
import type { Atoms } from "./atoms";
// ______________________________________________________
//
export let store: Store;
// ______________________________________________________
//
export const initStore = (initialAtoms: Partial<Atoms> = {}) => {
  store = createStore(initialAtoms);
};
