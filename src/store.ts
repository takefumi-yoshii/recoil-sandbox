import { atom } from "recoil";
// ______________________________________________________
//
export interface Task {
  title: string;
  completed: boolean;
}
// ______________________________________________________
//
export const storeFactory = (defaults: any = {}) => {
  return {
    atoms: {
      tasks: atom({
        key: "tasks",
        default: (defaults.tasks || []) as Task[],
      }),
    },
  };
};
// ______________________________________________________
//
export const fetchStoreInitialState = (title: string, count = 1) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        tasks: [...new Array(count)].map((_, count) => {
          return {
            title: `${title} ${count}`,
            completed: false,
          };
        }),
      });
    }, 1);
  });
};
// ______________________________________________________
//
const isServer = typeof window === "undefined";
const __NEXT_STORE__ = "__NEXT_STORE__";
declare global {
  interface Window {
    __NEXT_STORE__: any;
  }
}
export function getOrCreateStore(initialState: any = {}) {
  if (isServer) {
    return storeFactory(initialState);
  }
  if (!window[__NEXT_STORE__]) {
    window[__NEXT_STORE__] = storeFactory(initialState);
  }
  return window[__NEXT_STORE__];
}
