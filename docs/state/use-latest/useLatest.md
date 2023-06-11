# useLatest

useLatest 获取一个值的最新引用

### 基础用法

```tsx
import { useState } from 'react';
import { useLatest } from "hooks-react-using";
export default function useMyCustomHook() {
  const [count, setCount] = useState(0);
  const latestCountRef = useLatest(count);

  // 在某个回调函数中获取最新的 count 值
  const handleClick = () => {
    console.log('latest count is:', latestCountRef.current);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleClick}>Log latest count</button>
    </div>
  );
}

```

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

## 参数


