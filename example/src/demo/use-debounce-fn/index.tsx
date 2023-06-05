import React from "react";
import { useDebounceFn } from "../../../../packages/hooks-react-using/src";
const UseDebounceFnDemo: React.FC = () => {
  const { run, cancel, flush } = useDebounceFn(
    () => {
      console.log("Clicked");
    },
    { wait: 1000 }
  );
  return (
    <>
      <button onClick={run}>Run debounced function</button>
      <button onClick={cancel}>Cancel debounced function</button>
      <button onClick={flush}>Flush debounced function</button>
    </>
  );
};
export default UseDebounceFnDemo;
