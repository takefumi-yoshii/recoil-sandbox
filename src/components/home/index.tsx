import React from "react";
import { useHooks } from "./hooks";

export default () => {
  const hooks = useHooks();
  return (
    <>
      <h1>Next.js + Recoil - SSR example -</h1>
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
      <a href={hooks.href}>{hooks.href}</a>
      <hr />
      {hooks.tasks.map((task, index) => (
        <div key={index}>{task.title}</div>
      ))}
    </>
  );
};
