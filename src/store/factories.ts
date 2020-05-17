import { Store } from "./types";
import { atomsFactory } from "./atoms";
import type { Atoms } from "./atoms";
// ______________________________________________________
//
const storeFactory = (storeAtoms: Partial<Atoms> = {}): Store => ({
  atoms: atomsFactory(storeAtoms),
});
// ______________________________________________________
//
declare global {
  interface Window {
    __NEXT_RECOIL_STORE__: any;
  }
}
export function createStore(storeAtoms: Partial<Atoms> = {}) {
  if (typeof window === "undefined") {
    return storeFactory(storeAtoms);
  }
  if (!window["__NEXT_RECOIL_STORE__"]) {
    window["__NEXT_RECOIL_STORE__"] = storeFactory(storeAtoms);
  }
  return window["__NEXT_RECOIL_STORE__"];
}
