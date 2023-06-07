# useTimeoutFn

useTimeoutFn 在指定的时间后执行一个函数

### 基础用法

```tsx
import { useState } from "react";
import { useTimeoutFn } from "hooks-react-using";

function UseTimeoutFnDemo() {
  const [message, setMessage] = useState("");

  const [isReady, { cancel, reset }] = useTimeoutFn(
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
export default UseTimeoutFnDemo;
```

## API

```typescript
const [
    isReady: boolean,
   {
     cancel: () => void,
     reset: () => void,
   }
] = useTimeoutFn(fn: () => void, delay?: number);
```

## 参数
- isReady (boolean): 定时器是否执行完
- [cancel] (() => void): 取消定时器
- [reset] (() => void): 重新执行定时器