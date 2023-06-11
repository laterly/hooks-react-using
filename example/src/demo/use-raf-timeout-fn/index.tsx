import { useState } from "react";
import { useRafTimeoutFn } from "../../../../packages/hooks-react-using/src";

function UseRafTimeoutFnDemo() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState("");

  const { isRunning, stop,start } = useRafTimeoutFn(() => {
    setMessage("Hello, world!");
  }, 1000);

  const {
    isRunning: isRunningCount,
    start: startCount,
    stop: stopCount,
  } = useRafTimeoutFn(
    () => {
      setCount("Hello, world!");
    },
    1000,
    {
      //手动调用start开始
      autoStart: false,
    }
  );

  return (
    <>
      <div>{isRunning ? message : "Waiting..."}</div>
      <button
        onClick={() => {
          stop();
        }}
      >
        停止定时器
      </button>
      <button
        onClick={() => {
          start();
        }}
      >
        开始执行定时器
      </button>

      <div>{isRunningCount ? count : "Waiting..."}</div>
      <button
        onClick={() => {
          stopCount();
        }}
      >
        停止定时器
      </button>
      <button
        onClick={() => {
          startCount();
        }}
      >
        开始执行定时器
      </button>
    </>
  );
}
export default UseRafTimeoutFnDemo;
