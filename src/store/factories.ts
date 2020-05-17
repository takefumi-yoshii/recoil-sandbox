import { StoreAtoms, Store, Task } from "./types";
import { atom } from "recoil";
// ______________________________________________________
//
const __NEXT_STORE__ = "__NEXT_STORE__";
declare global {
  interface Window {
    __NEXT_STORE__: any;
  }
}
export function getOrCreateStore(initialState: any = {}) {
  if (typeof window === "undefined") {
    return storeFactory(initialState);
  }
  if (!window[__NEXT_STORE__]) {
    window[__NEXT_STORE__] = storeFactory(initialState);
  }
  return window[__NEXT_STORE__];
}
// ______________________________________________________
//
export const storeFactory = (storeAtoms: Partial<StoreAtoms> = {}): Store => ({
  atoms: {
    tasks: atom({
      key: "tasks",
      default: (storeAtoms.tasks || []) as Task[],
    }),
  },
});
