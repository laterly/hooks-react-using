# useOnceEffect

useOnceUpdateLayoutEffect 与 useLayoutEffect 类似，但是不包括初次渲染，并且只在依赖项更新时执行一次，后续依赖变更不再执行

### 基础用法

```tsx
import { useState } from "react";
import { useOnceUpdateLayoutEffect } from "hooks-react-using";
function UseOnceUpdateLayoutEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  useOnceUpdateLayoutEffect(() => {
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
export default UseOnceUpdateLayoutEffectDemo;
```

## API

```typescript
useOnceUpdateLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```

## 参数
