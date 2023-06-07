# useTimeoutFn

useTimeoutFn 在指定的时间后执行一个函数,基于 requestAnimationFrame 实现

### 基础用法

```tsx
import { useState } from "react";
import { useRafTimeoutFn } from "hooks-react-using";

function UseRafTimeoutFnDemo() {
  const [message, setMessage] = useState("");

  const [isReady, { cancel, reset }] = useRafTimeoutFn(
    () => {
      setMessage("Hello, world!");
    },
    1000
  );

  return (
    <>
      <div>{isReady ? message : "Waiting..."}</div>
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
export default UseRafTimeoutFnDemo;
```

## API

```typescript
const [
    isReady: boolean,
   {
     cancel: () => void,
     reset: () => void,
   }
] = useRafTimeoutFn(fn: React.EffectCallback, delay?: number);
```

## 参数
- isReady (boolean): 定时器是否执行完
- [cancel] (() => void): 取消定时器
- [reset] (() => void): 重新执行定时器