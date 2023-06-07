# useOnceEffect

useOnceEffect 与 useEffect 类似，但只在依赖项更新时执行一次   

### 基础用法

```tsx
import { useState } from "react";
import { useOnceEffect } from "hooks-react-using";
function UseOnceEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  useOnceEffect(() => {
    setChangeCount(count);
  }, [count]);

  return (
    <div>
      <div>count:{count}</div>
      <div>changeCount:{changeCount}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}
export default UseOnceEffectDemo;
```

## API

```typescript
useOnceEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```

## 参数
