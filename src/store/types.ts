import { RecoilState } from "recoil";
// ______________________________________________________
//
export interface Task {
  title: string;
  completed: boolean;
}
// ______________________________________________________
//
export const initialStoreAtoms = {
  tasks: [] as Task[],
};
export type StoreAtoms = typeof initialStoreAtoms;
// ______________________________________________________
//
export type RecoilStateMap<T> = { [K in keyof T]: RecoilState<T[K]> };

export type StoreState = {
  atoms: StoreAtoms;
};
export type Store = {
  atoms: RecoilStateMap<StoreAtoms>;
};
