# useAsyncEffect

useAsyncEffect 与 useEffect 类似，可以使用异步函数

### 基础用法

```tsx
import { useState } from "react";
import { useAsyncEffect } from "hooks-react-using";
const featData = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["1", "2", "3"]);
    }, 3000);
  });
};
const UseAsyncEffectDemo = () => {
  const [data, setData] = useState<string[]>();
  useAsyncEffect(async () => {
    const initData = ["1", "2"];
    const data = await featData();
    const initData2 = ["2", "3"];
    const data1 = await featData();
    setData([...initData, ...data, ...initData2, ...data1]);
    return () => {
      // Cleanup function
      console.log("clean");
    };
  }, []);
  return (
    <>
      {data?.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};

export default UseAsyncEffectDemo;
```

## API

```typescript
type AsyncEffectCleanup = void | (() => void | Promise<void>);
type AsyncEffectFn = () => Promise<AsyncEffectCleanup>;
useAsyncEffect(
  effect: AsyncEffectFn,
  deps: DependencyList
);
```

## 参数


