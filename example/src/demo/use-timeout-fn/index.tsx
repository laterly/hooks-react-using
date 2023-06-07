import { useState } from "react";
import { useTimeoutFn } from "../../../../packages/hooks-react-using/src";

function UseTimeoutFnDemo() {
  const [message, setMessage] = useState("");

  const [isReady, { cancel, reset }] = useTimeoutFn(
    () => {
      console.log("hello");
      setMessage("Hello, world!");
    },
    {
      delay: 1000,
    }
  );

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
export default UseTimeoutFnDemo;
