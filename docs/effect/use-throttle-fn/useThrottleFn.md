# useThrottleFn

useThrottleFn 限制函数的执行频率，节流

### 基础用法

```tsx
import React, { useState } from "react";
import { useThrottleFn } from "hooks-react-using";
const UseThrottleFnDemo: React.FC = () => {
  const [position, setPosition] = useState(0);

  const { run } = useThrottleFn(
    (e: any) => {
      setPosition(e.target.scrollTop);
      // 实际的滚动逻辑
    },
    {
      wait: 1000,
    }
  );
  return (
    <>
      <div onScroll={run} style={{ overflowY: "scroll", height: "100px" }}>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
          <li>Pineapple</li>
          <li>Grape</li>
          <li>Watermelon</li>
          <li>Strawberry</li>
          <li>Mango</li>
          <li>Pear</li>
          <li>Kiwi</li>
        </ul>
      </div>
      <div>position:{position}</div>
    </>
  );
};

export default UseThrottleFnDemo;

```

## API

```typescript
interface Options {
  wait?:number,
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}
const {
  run,
  cancel,
  flush
} = useThrottleFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

## 参数
- func (Function): 要节流的函数。
- [wait=0] (number): 需要节流的毫秒。
- [options=] (Object): 选项对象
- [options.leading=false] (boolean): 指定调用在节流开始前。
- [options.trailing=true] (boolean): 指定调用在节流结束后。
