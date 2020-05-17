import { Store } from "./types";
import { atomsFactory } from "./atoms";
import type { Atoms } from "./atoms";
// ______________________________________________________
//
const storeFactory = (initialAtoms: Partial<Atoms> = {}): Store => ({
  atoms: atomsFactory(initialAtoms),
});
// ______________________________________________________
//
declare global {
  interface Window {
    __NEXT_RECOIL_STORE__: any;
  }
}
export function createStore(initialAtoms: Partial<Atoms> = {}) {
  if (typeof window === "undefined") {
    return storeFactory(initialAtoms);
  }
  if (!window["__NEXT_RECOIL_STORE__"]) {
    window["__NEXT_RECOIL_STORE__"] = storeFactory(initialAtoms);
  }
  return window["__NEXT_RECOIL_STORE__"];
}
