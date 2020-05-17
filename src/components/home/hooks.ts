import React from "react";
import { useRecoilValue } from "recoil";
import { store } from "../../store";
import { Props } from "./index";
// ______________________________________________________
//
export const useHooks = (props: Props) => {
  const tasks = useRecoilValue(store.atoms.tasks);
  const [label, setLabel] = React.useState(props.label);
  const [count, setCount] = React.useState(props.count);
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
