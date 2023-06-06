# useThrottle

useThrottle 用于处理节流值

### 基础用法

```tsx
import { useState } from "react";
import { useThrottle } from "hooks-react-using";

const UseThrottleDemo = () => {
  const [count, setCount] = useState(0);

  const throttledSetCount = useThrottle(count, {
    wait: 1000,
  });

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>throttledSetCount:{throttledSetCount}</p>
    </div>
  );
};
export default UseThrottleDemo;

```

## API

```typescript
interface Options {
  wait?:number,
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}
const throttleValue = useThrottle(value:T,{ wait: Options });
```

## 参数
- value (T): 要节流的值。
- [wait=0] (number): 需要节流的毫秒。
- [options=] (Object): 选项对象
- [options.leading=false] (boolean): 指定调用在节流开始前。
- [options.trailing=true] (boolean): 指定调用在节流结束后。
