import { useState } from "react";
import { useRafIntervalFn } from "../../../../packages/hooks-react-using/src";

function UseRafIntervalFnDemo() {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const { isRunning, stop } = useRafIntervalFn(() => {
    setCount(count + 1);
  }, 1000);

  const {
    isRunning: isRunningCountDown,
    start: startCountDown,
    stop: stopCountDown,
  } = useRafIntervalFn(() => {
    setCountDown(countDown + 1);
  }, 1000,{
    //需要手动触发
    autoStart: false
  });

  return (
    <>
      <div>{isRunning ? count : "Waiting..."}</div>
      <div>定时器是否开启:{isRunning ? "开启" : "未开启"}</div>
      <button
        onClick={() => {
          stop();
        }}
      >
        取消定时器
      </button>
      <div>{isRunningCountDown ? countDown : "Waiting..."}</div>
      <div>定时器是否开启:{isRunning ? "开启" : "未开启"}</div>
      <button
        onClick={() => {
          stopCountDown();
        }}
      >
        停止定时器
      </button>
      <button
        onClick={() => {
          startCountDown();
        }}
      >
        开始执行定时器
      </button>
    </>
  );
}
export default UseRafIntervalFnDemo;
