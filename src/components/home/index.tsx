import React from "react";
import { useHooks } from "./hooks";
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = useHooks();
  return (
    <>
      <h1>Next.js + Recoil - SSR example -</h1>
      <hr />
      <h3>1. INPUT VALUES FOR QUERY</h3>
      <p>
        user_name：
        {hooks.user_name}
      </p>
      <p>
        <label htmlFor="email">email：</label>
        <input
          id="email"
          type="email"
          value={hooks.email}
          onChange={hooks.handleChangeMail}
        />
      </p>
      <hr />
      <h3>2. SHOW SSR EXAMPLE</h3>
      <p>
        <a href={hooks.href}>{hooks.href}</a>
      </p>
    </>
  );
};
// ______________________________________________________
//
export default Page;
