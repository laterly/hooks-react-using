# useDebounceFn

将状态存储在 localStorage 中的 Hook

### 基础用法

```tsx
import React from "react";
import { useLocalStorageState } from "hooks-react-using";

const Example: React.FC = () => {
  const [state, { set, del, clear }] = useLocalStorageState<number>(
    "local-key",
    0
  );

  return (
    <div>
      <input
        type="text"
        placeholder="分数"
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          set(Number(e.target.value));
        }}
      />
      <p>更新分数： {state}</p>
      <button
        onClick={() => {
          del();
        }}
      >
        清空分数
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        全部清空
      </button>
    </div>
  );
};
```

## API

```typescript
const [state, { set, del, clear }] = useLocalStorageState<T>(key:string,value:T);
```
## 参数
- key 是一个字符串，用于标识存储在本地的key键
- [set] ((value: T) => void): 设置存储
- [del] (() => void): 删除key对应的state
- [clear] (() => void): 清空所有
