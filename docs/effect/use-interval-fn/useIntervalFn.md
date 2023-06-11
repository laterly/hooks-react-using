# useIntervalFn

useIntervalFn 定时器执行一个函数

### 基础用法

```tsx
import { useState } from "react";
import { useIntervalFn } from "hooks-react-using";

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

```

## API

```typescript
const {
  isRunning: boolean,
  stop: () => void,
  start: () => void,
} = useIntervalFn(fn: React.EffectCallback, delay?: number,{
  immediate?: boolean;
  autoStart?: boolean;
});
```

## 参数
- isRunning (boolean): 定时器是否正在执行
- [immediate] (boolean):是否立即触发，默认false
- [autoStart] (boolean): 是否自动触发，默认true，如果设置为false,则需要调用start触发
- [stop] (() => void): 停止定时器
- [start] (() => void): 开始执行定时器