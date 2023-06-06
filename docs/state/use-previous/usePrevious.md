# usePrevious

usePrevious 用来获取组件上一次渲染时某个状态或属性的值

### 基础用法

```tsx
import { useState } from "react";
import { usePrevious } from "hooks-react-using";
const UsePreviousDemo = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount !== undefined ? prevCount : "N/A"}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default UsePreviousDemo;
```

## API

```typescript
const previousState: T = usePrevious<T>(
  value: T,
);
```

## 参数

