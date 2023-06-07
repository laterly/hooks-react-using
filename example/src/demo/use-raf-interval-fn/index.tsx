import { useState } from "react";
import { useRafIntervalFn } from "../../../../packages/hooks-react-using/src";

function UseRafIntervalFnDemo() {
  const [count, setCount] = useState(0);

  const { isRunning, cancel, reset } = useRafIntervalFn(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <div>{isRunning ? count : "Waiting..."}</div>
      <div>定时器是否开启:{isRunning ? "开启" : "未开启"}</div>
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
export default UseRafIntervalFnDemo;
