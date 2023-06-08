# useWatchEffect

useWatchEffect 与 useEffect 类似，可以观察哪个依赖的变更，观察依赖变更的新值和旧值，并且可以取消观察。

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

  const {cancel,reset} = useWatchEffect<[User[], number[], string]>(
    (
      [newUserValue, oldUserValue],
      [newCountValue, oldCountValue],
      [newNameValue, oldNameValue],
      changes,
    ) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(
          newUserValue
        )}, count from ${oldCountValue} to ${newCountValue}, name from ${oldNameValue} to ${newNameValue}`
      );
      console.log('changes',changes);
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
          cancel();
        }}
      >
        取消观察
      </button>
      <buttion onClick={()=>{
        reset();
      }}>
        重新观察
      </button>
    </div>
  );
}
export default Example;

```

## API

```typescript
type EffectCallback<T extends any[]> = (...args: T) => void;
const {cancel,reset}= useWatchEffect = <T extends any[]>(
  effectCallback: EffectCallback<T>,
  deps: React.DependencyList,
);
```
