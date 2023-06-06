# useDebounceEffect

useDebounceEffect 可以有效地控制useEffect防抖

### 基础用法

```tsx
import React, { useState } from "react";
import { useDebounceEffect } from "hooks-react-using";
const Excample: React.FC = () => {
  const [count, setCount] = useState("");
  const [debounceCount, setDebounceCount] = useState("");
  const [isDebounce, setIsDebounce] = useState<boolean>(false);
  useDebounceEffect(
    () => {
      setDebounceCount(count + "debounce");
    },
    [count],
    {
      wait: 1000,
    }
  );

  useDebounceEffect(
    () => {
      setIsDebounce(true);
    },
    [],
    {
      wait: 1000,
    }
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCount(value);
  };

  return (
    <div>
      <input type="number" value={count} onChange={handleInputChange} />
      <p>count:{count}</p>
      <p>debounceCount: {debounceCount}</p>
      <p>isDebounce:{isDebounce ? "true" : "false"}</p>
    </div>
  );
};
export default Excample;
```

## API

```typescript
interface Options {
  wait?:number,
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}
useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: Options
);
```

## 参数

- [wait=0] (number): 需要延迟的毫秒数。
- [options=] (Object): 选项对象。
- [options.leading=false] (boolean): 指定在延迟开始前调用。
- [options.maxWait] (number): 设置 func 允许被延迟的最大值。
- [options.trailing=true] (boolean): 指定在延迟结束后调用。
