import { atom } from "recoil";
import { Task } from "./types";
// ______________________________________________________
//
export type Atoms = {
  tasks: Task[];
};
// ______________________________________________________
//
export const atomsFactory = (storeAtoms: Partial<Atoms> = {}) => ({
  tasks: atom({
    key: "tasks",
    default: storeAtoms.tasks || [],
  }),
});
