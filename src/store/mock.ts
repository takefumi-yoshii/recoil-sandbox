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
