import { useRafCountDown } from "../../../../packages/hooks-react-using/src";

function Example() {
  const { isRunning, current, stop } = useRafCountDown({
    //倒计时24小时
    time: 24 * 60 * 60 * 1000,
    //变化时间间隔（毫秒）
    interval: 1000,
    //倒计时改变时触发的回调函数
    onChange: (current) => {
      console.log("当前时间current", current);
    },
    //倒计时结束时触发的回调函数
    onEnd: () => {
      console.log("结束倒计时");
    },
  });

  const {
    isRunning: isRunningCountDown,
    current: currentCounrDown,
    start: startCountDown,
    stop: stopCountDown,
  } = useRafCountDown({
    //倒计时6秒
    time: 6 * 1000,
    //变化时间间隔（毫秒）
    interval: 1000,
    //默认true,设置为false，需要手动触发调用start
    autoStart: false,
    //倒计时改变时触发的回调函数
    onChange: (current) => {
      console.log("当前时间current", current);
    },
    //倒计时结束时触发的回调函数
    onEnd: () => {
      console.log("结束倒计时");
    },
  });

  return (
    <div>
      {/* <div>倒计时：{current?.minutes}{current?.seconds}{current?.milliseconds}</div> */}
      {isRunning && (
        <>
          <div>总时间：{current?.total}</div>
          <div>剩余天数：{current?.days}</div>
          <div>剩余小时：{current?.hours}</div>
          <div>剩余分钟：{current?.minutes}</div>
          <div>剩余秒数：{current?.seconds}</div>
          <div>剩余毫秒：{current?.milliseconds}</div>
          <div onClick={stop}>停止倒计时</div>
        </>
      )}

      {isRunningCountDown ? (
        <>
          <button>{currentCounrDown.seconds} s</button>
          <button onClick={stopCountDown}>停止倒计时</button>
          <button
            onClick={() => {
              startCountDown(6 * 1000);
            }}
          >
            重新开始倒计时
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            startCountDown();
          }}
        >
          手动触发开始倒计时6秒
        </button>
      )}
    </div>
  );
}

export default Example;
