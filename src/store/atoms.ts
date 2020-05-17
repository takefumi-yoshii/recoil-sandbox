import { atom } from "recoil";
import { RecoilStates } from "./types";
// ______________________________________________________
//
export type Atoms = {
  user_name: string;
  email: string;
};
// ______________________________________________________
//
export const atomsFactory = (
  initialAtoms: Partial<Atoms> = {}
): RecoilStates<Atoms> => ({
  user_name: atom({
    key: "user_name",
    default: initialAtoms.user_name || "",
  }),
  email: atom({
    key: "email",
    default: initialAtoms.email || "",
  }),
});
