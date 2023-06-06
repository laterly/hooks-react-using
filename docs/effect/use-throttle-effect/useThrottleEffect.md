# useThrottleEffect

useThrottleEffect 可以有效地控制useEffect节流。

### 基础用法

```tsx
import React, { useState } from "react";
import { useThrottleEffect } from "hooks-react-using";
const UseThrottleEffectDemo: React.FC = () => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState<string[]>([]);

  useThrottleEffect(
    () => {
      setRecord([...record, search]);
      console.log('jinlai1');
    },
    [search],
    {
      wait: 3000,
    }
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <div>
          {record?.map((item, index) => {
            return <div key={index + "id"}>{item}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default UseThrottleEffectDemo;

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
