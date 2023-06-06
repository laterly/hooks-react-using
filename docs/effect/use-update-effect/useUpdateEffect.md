# useUpdateEffect

useUpdateEffect 与 useEffect 类似，但只在依赖项更新时运行，不包括初次渲染    

### 基础用法

```tsx
import React, { useState } from "react";
import { useUpdateEffect } from "hooks-react-using";
const Excample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(["1", "2", "3"]);
    }, 1000);
  }, []);

  useUpdateEffect(() => {
    setIsLoading(false);
  }, [data]);

  return <div>{isLoading ? <p>Loading...</p> : <p>Loaded!</p>}</div>;
};
export default Excample;
```

## API

```typescript
useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```

## 参数
