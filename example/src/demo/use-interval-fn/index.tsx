import { useState } from "react";
import { useIntervalFn } from "../../../../packages/hooks-react-using/src";

function UseIntervalFnDemo() {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const { isRunning, stop } = useIntervalFn(() => {
    setCount(count + 1);
  }, 1000);

  const {
    isRunning: isRunningCountDown,
    start: startCountDown,
    stop: stopCountDown,
  } = useIntervalFn(() => {
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
export default UseIntervalFnDemo;
