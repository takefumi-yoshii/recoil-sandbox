import type { RecoilState } from "recoil";
import type { Atoms } from "./atoms";
// ______________________________________________________
//
export type RecoilStates<T> = { [K in keyof T]: RecoilState<T[K]> };
// ______________________________________________________
//
export type StoreState = {
  atoms: Atoms;
};
export type Store = {
  atoms: RecoilStates<Atoms>;
};
