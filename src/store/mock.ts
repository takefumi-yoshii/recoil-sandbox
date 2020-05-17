import type { StoreState } from "./types";
// ______________________________________________________
//
export const fetchInitialState = (email: string) => {
  return new Promise<StoreState>((resolve) => {
    setTimeout(() => {
      resolve({
        atoms: {
          user_name: "TEST_USER",
          email,
        },
      });
    }, 1);
  });
};
