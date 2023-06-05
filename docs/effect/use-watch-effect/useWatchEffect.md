# useWatchEffect

useWatchEffect 可以观察值的变化，并且可以中止观察，减少不必要的开销，它接收两个参数：要监听的变量和监听函数

### 基础用法

```tsx
//导入模块
import React, { useState } from "react";
import { Button } from "antd";
import { useWatchEffect } from "hooks-react-using/src";

const Example: React.FC = () => {
  const [prev, setPrev] = useState(0);
  const [count, setCount] = useState(0);
  const stop = useWatchEffect(count, (curVal, oldVal) => {
    console.log("旧值oldVal: ", oldVal);
    console.log("新值curVal: ", curVal);
    setPrev(oldVal!);
  });
  const add = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <p> 当前的count是{count}</p> <p> 前一次的count是{prev}</p> {count} <Button
        onClick={add}
        className="btn"
      >
        +
      </Button> <Button onClick={stop} className="btn">
        中止观察
      </Button>
    </div>
  );
};
export default Example;
```

## API

```typescript
type Callback<T> = (dep: T, prev: T | undefined) => void;
type Config = {
  immediate: boolean;
};
const stop = useWatchEffect<T>(
  dep: T,
  callback: Callback<T>,
  config: Config = { immediate: false },
)
```
