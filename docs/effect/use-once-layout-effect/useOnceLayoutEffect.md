# useOnceLayoutEffect

useOnceLayoutEffect 与 useLayoutEffect 类似，但只在依赖项更新时执行一次，后续依赖变更不再执行 

### 基础用法

```tsx
import { useState } from "react";
import { useOnceLayoutEffect } from "hooks-react-using";
function UseOnceLayoutEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  useOnceLayoutEffect(() => {
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
export default UseOnceLayoutEffectDemo;
```

## API

```typescript
useOnceLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```

## 参数
