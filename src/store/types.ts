import { RecoilState } from "recoil";
import { atomsFactory } from "./factories";
// ______________________________________________________
//
type UnwrapRecoilState<T> = T extends RecoilState<infer U> ? U : never;
type UnwrapRecoilStateMap<T> = { [K in keyof T]: UnwrapRecoilState<T[K]> };
type WrapRecoilStateMap<T> = { [K in keyof T]: RecoilState<T[K]> };
// ______________________________________________________
//
export interface Task {
  title: string;
  completed: boolean;
}
// ______________________________________________________
//
type AtomsFactoryReturn = ReturnType<typeof atomsFactory>;
export type StoreAtomsState = UnwrapRecoilStateMap<AtomsFactoryReturn>;
// ______________________________________________________
//
export type StoreState = {
  atoms: StoreAtomsState;
};
export type Store = {
  atoms: WrapRecoilStateMap<StoreAtomsState>;
};
