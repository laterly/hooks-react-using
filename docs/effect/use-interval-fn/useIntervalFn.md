# useIntervalFn

useIntervalFn 定时器执行一个函数

### 基础用法

```tsx
import { useState } from "react";
import { useIntervalFn } from "hooks-react-using";

function UseIntervalFnDemo() {
  const [count, setCount] = useState(0);

  const { isRunning, cancel, reset } = useIntervalFn(() => {
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
export default UseIntervalFnDemo;

```

## API

```typescript
const {
  isRunning: boolean,
  cancel: () => void,
  reset: () => void,
} = useIntervalFn(fn: React.EffectCallback, delay?: number);
```

## 参数
- isRunning (boolean): 定时器是否正在执行
- [cancel] (() => void): 取消定时器
- [reset] (() => void): 重新执行定时器