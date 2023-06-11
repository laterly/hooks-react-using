import { useState } from "react";
import { useCountDown } from "../../../../packages/hooks-react-using/src";

function Example() {
  //   const [totalTime, setTotalTime] = useState(30000);
  //   const [current, setCurrent] = useState(null);
  //   const [isFinished, setIsFinished] = useState(false);

  //   const handleStart = () => {
  //     setIsFinished(false);
  //     countdown.start();
  //   };

  //   const handlePause = () => {
  //     countdown.pause();
  //   };

  //   const handleReset = () => {
  //     setIsFinished(false);
  //     countdown.reset(totalTime);
  //   };

  //   const handleChange = (newCurrent) => {
  //     setCurrent(newCurrent);
  //   };

  //   const handleFinish = () => {
  //     setIsFinished(true);
  //   };

  const { current, start, pause, reset } = useCountDown({
    //倒计时24小时
    time: 24 * 60 * 60 * 1000,
    //变化时间间隔（毫秒）
    interval: 1000,
    //倒计时改变时触发的回调函数
    onChange: (current) => {
      console.log("current", current);
    },
    //倒计时结束时触发的回调函数
    onFinish: () => {
      console.log("finish");
    },
  });

  return (
    <div>
      <button onClick={start}>开始倒计时</button>
      {/* <div>倒计时：{current?.minutes}{current?.seconds}{current?.milliseconds}</div> */}
      <div>总时间：{current?.total}</div>
      <div>剩余天数：{current?.days}</div>
      <div>剩余小时：{current?.hours}</div>
      <div>剩余分钟：{current?.minutes}</div>
      <div>剩余秒数：{current?.seconds}</div>
      <div>剩余毫秒：{current?.milliseconds}</div>
      {/* <div>
        <p>{`Remaining Time: ${current?.minutes}:${current?.seconds}.${current?.milliseconds}`}</p>
        {isFinished ? <p>Finished!</p> : null}
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button> */}
    </div>
  );
}

export default Example;
