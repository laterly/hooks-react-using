import { useState } from "react";
import { useRafTimeoutFn } from "../../../../packages/hooks-react-using/src";

function UseRafTimeoutFnDemo() {
  const [message, setMessage] = useState("");

  const { isReady, cancel, reset } = useRafTimeoutFn(() => {
    setMessage("Hello, world!");
  }, 1000);

  return (
    <>
      <div>{isReady ? message : "Waiting..."}</div>
      <button
        onClick={() => {
          cancel();
        }}
      >
        取消定时器
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        重新执行定时器
      </button>
    </>
  );
}
export default UseRafTimeoutFnDemo;
