# useTimeoutFn

useTimeoutFn 在指定的时间后执行一个函数

### 基础用法

```tsx
import { useState } from "react";
import { useTimeoutFn } from "hooks-react-using";

function UseTimeoutFnDemo() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState("");

  const { isRunning, stop,start } = useTimeoutFn(() => {
    setMessage("Hello, world!");
  }, 1000);

  const {
    isRunning: isRunningCount,
    start: startCount,
    stop: stopCount,
  } = useTimeoutFn(
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
      <div>{isReady ? message : "Waiting..."}</div>
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
export default UseTimeoutFnDemo;
```

## API

```typescript
const {
  isRunning: boolean,
  stop: () => void,
  start: () => void,
} = useTimeoutFn(fn: React.EffectCallback, delay?: number,{
  immediate?: boolean;
  autoStart?: boolean;
});
```

## 参数
- isRunning (boolean): 定时器是否开始执行
- [delay] (number): 变化时间间隔（毫秒），默认0
- [immediate] (boolean):是否立即触发，默认false
- [autoStart] (boolean): 是否自动触发，默认true，如果设置为false,则需要调用start触发
- [stop] (() => void): 取消定时器
- [start] (() => void): 开始执行定时器