# useWatchEffect

useDeepWatchEffect 与 useEffect 类似，可以深度观察哪个依赖变化触发了 useEffect 的执行，并且可以取消观察。

### 基础用法

```tsx
//导入模块
import { useState } from "react";
import { useDeepWatchEffect } from "hooks-react-using";
interface User {
  name?: string;
}
function MyComponent(): JSX.Element {
  const [user, setUser] = useState<User>({});

  const {cancel,reset} = useDeepWatchEffect<[User[], number[], string]>(
    ([newUserValue, oldUserValue],changes) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(newUserValue)}`
      );
      console.log('变化的索引changes',changes);
    },
    [user]
  );

  return (
    <div>
      <div>{user.name}</div>

      <button
        onClick={() =>
          setUser(() => ({
            name: '小明',
          }))
        }
      >
        设置名字
      </button>
      <button
        onClick={() => {
          cancel();
        }}
      >
        取消观察
      </button>
       <button
        onClick={() => {
          reset();
        }}
      >
        重新观察
      </button>
    </div>
  );
}
export default MyComponent;

```

## API

```typescript
export type EffectCallback<T extends any[]> = (
  ...args: [...T, number[]]
) => void;
const {cancel,reset}= useDeepWatchEffect = <T extends any[]>(
  effectCallback: EffectCallback<T>,
  deps: React.DependencyList,
);
```
