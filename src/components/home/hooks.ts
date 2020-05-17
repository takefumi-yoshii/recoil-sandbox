import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { store } from "../../store";
// ______________________________________________________
//
export const useHooks = () => {
  const user_name = useRecoilValue(store.atoms.user_name);
  const [email, setEmail] = useRecoilState(store.atoms.email);
  const href = React.useMemo(() => `/?email=${email}`, [email]);
  const handleChangeMail = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
    },
    []
  );
  return {
    user_name,
    email,
    href,
    handleChangeMail,
  };
};
