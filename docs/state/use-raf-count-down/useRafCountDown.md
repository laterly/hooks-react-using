# useRafCountDown

useRafCountDown 可用于实现倒计时，基于 requestAnimationFrame 实现

### 基础用法

```tsx
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
```

## API

```typescript
type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type UseCountDownActions = {
  isRunning?: boolean;
  start: (time?: number) => void; //手动触发倒计时
  stop: () => void; //停止触发倒计时
  current: CurrentTime;
};

type UseCountDownOptions = {
  time: number; //剩余时间（毫秒）
  interval?: number; //变化时间间隔（毫秒）
  immediate?: boolean; //是否立即触发
  autoStart?: boolean; //是否自动开始倒计时
  onChange?: (current: CurrentTime) => void; //变化的回调函数
  onEnd?: () => void; //倒计时结束触发
};
const {
  isRunning,
  start,
  stop,
  current,
} = useCountDown(UseCountDownOptions);
```

## 参数
- isRunning (boolean): 定时器是否执行中
- [stop] (() => void): 取消定时器
- [start] ((time?:number) => void): 开始执行定时器
- [current] (CurrentTime): 当前的倒计时时间
- [time]: number; //剩余时间（毫秒）
- [interval]?: number; //变化时间间隔（毫秒），默认1000毫秒
- [immediate]?: boolean; //是否立即触发，默认false
- [autoStart] (boolean): 是否自动触发，默认true，如果设置为false,则需要调用start触发
- [onChange]?: (current: CurrentTime) => void; //变化的回调函数,current为当前的时间
- [onEnd]?: () => void; //倒计时结束触发