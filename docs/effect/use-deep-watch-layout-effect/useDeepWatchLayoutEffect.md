# useWatchEffect

useDeepWatchLayoutEffect 与 useLayoutEffect 类似，可以观察依赖变更的新值和旧值，并且可以取消观察。

### 基础用法

```tsx
//导入模块
import { useState } from "react";
import { useDeepWatchLayoutEffect } from "hooks-react-using";
interface User {
  name?: string;
}
function MyComponent(): JSX.Element {
  const [user, setUser] = useState<User>({});

  const {cancel,reset} = useDeepWatchLayoutEffect<[User[], number[], string]>(
    ([newUserValue, oldUserValue]) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(newUserValue)}`
      );
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
type EffectCallback<T extends any[]> = (...args: T) => void;
const {cancel,reset}= useDeepWatchLayoutEffect = <T extends any[]>(
  effectCallback: EffectCallback<T>,
  deps: React.DependencyList,
);
```
