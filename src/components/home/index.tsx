import React from "react";
import { useHooks } from "./hooks";
// ______________________________________________________
//
export type Props = {
  label: string;
  count: number;
};
// ______________________________________________________
//
const Page: React.FC<Props> = (props) => {
  const hooks = useHooks(props);
  return (
    <>
      <h1>Next.js + Recoil - SSR example -</h1>
      <hr />
      <h3>1. INPUT VALUES FOR QUERY</h3>
      <p>
        label_name:{" "}
        <input
          type="text"
          value={hooks.label}
          onChange={hooks.handleChangeLabel}
        />
      </p>
      <p>
        output_count:{" "}
        <input
          type="number"
          value={hooks.count}
          onChange={hooks.handleChangeCount}
        />
      </p>
      <hr />
      <h3>2. SHOW SSR EXAMPLE</h3>
      <p>
        <a href={hooks.href}>{hooks.href}</a>
      </p>
      <hr />
      {hooks.tasks.map((task, index) => (
        <div key={index}>{task.title}</div>
      ))}
    </>
  );
};
// ______________________________________________________
//
export default Page;
