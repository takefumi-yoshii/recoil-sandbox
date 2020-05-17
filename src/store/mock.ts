import type { StoreState } from "./types";
// ______________________________________________________
//
export const fetchInitialState = (title: string, count = 1) => {
  return new Promise<StoreState>((resolve) => {
    setTimeout(() => {
      resolve({
        atoms: {
          tasks: [...new Array(count)].map((_, count) => {
            return {
              title: `${title} ${count}`,
              completed: false,
            };
          }),
        },
      });
    }, 1);
  });
};
