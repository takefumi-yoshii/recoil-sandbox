import { StoreAtomsState, Store, Task } from "./types";
import { atom } from "recoil";
// ______________________________________________________
//
declare global {
  interface Window {
    __NEXT_STORE__: any;
  }
}
export function getOrCreateStore(initialState: any = {}) {
  if (typeof window === "undefined") {
    return storeFactory(initialState);
  }
  if (!window["__NEXT_STORE__"]) {
    window["__NEXT_STORE__"] = storeFactory(initialState);
  }
  return window["__NEXT_STORE__"];
}
// ______________________________________________________
//
export const atomsFactory = (storeAtoms: any = {}) => ({
  tasks: atom({
    key: "tasks",
    default: (storeAtoms.tasks || []) as Task[],
  }),
});

export const storeFactory = (
  storeAtoms: Partial<StoreAtomsState> = {}
): Store => ({
  atoms: atomsFactory(storeAtoms),
});
