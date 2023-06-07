# useWatchEffect

useWatchEffect 可以观察值的变化，并且可以中止观察，减少不必要的开销，它接收两个参数：要监听的变量和监听函数

### 基础用法

```tsx
//导入模块
import { useState } from "react";
import { useWatchEffect } from "hooks-react-using";
interface User {
  name?: string;
}
function Example(): JSX.Element {
  const [user, setUser] = useState<User>({});
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const stop = useWatchEffect<[User[], number[], string]>(
    (
      [newUserValue, oldUserValue],
      [newCountValue, oldCountValue],
      [newNameValue, oldNameValue]
    ) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(
          newUserValue
        )}, count from ${oldCountValue} to ${newCountValue}, name from ${oldNameValue} to ${newNameValue}`
      );
    },
    [user, count, name]
  );

  return (
    <div>
      <div>{user.name}</div>
      <input
        type="text"
        value={user.name}
        placeholder="请输入用户名字"
        onChange={(event) =>
          setUser({
            name: event.target.value,
          })
        }
      />
      <input
        type="text"
        value={name}
        placeholder="请输入名字"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment count
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          stop();
        }}
      >
        中止观察
      </button>
    </div>
  );
}
export default Example;

```

## API

```typescript
type Callback<T> = (dep: T, prev: T | undefined) => void;
type Config = {
  immediate: boolean;
};
const stop = useWatchEffect<T>(
  dep: T,
  callback: Callback<T>,
  config: Config = { immediate: false },
)
```
