import React from "react";
import { useRecoilValue } from "recoil";
import { store } from "../../pages/_app";
// ______________________________________________________
//
export const useHooks = () => {
  const tasks = useRecoilValue(store.atoms.tasks);
  const [label, setLabel] = React.useState("");
  const [count, setCount] = React.useState(1);
  const href = React.useMemo(() => `/?label=${label}&count=${count}`, [
    label,
    count,
  ]);
  const handleChangeCount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const num = Number(event.currentTarget.value);
      setCount(isNaN(num) ? 1 : num);
    },
    []
  );
  const handleChangeLabel = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLabel(event.currentTarget.value);
    },
    []
  );
  return {
    tasks,
    label,
    count,
    href,
    handleChangeCount,
    handleChangeLabel,
  };
};
