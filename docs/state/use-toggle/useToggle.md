# useToggle

useToggle 可用于管理布尔值状态，还可以用于管理任何类型的状态的真假值

### 基础用法

```tsx
import { useToggle } from "hooks-react-using";

function Example() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <p>Value: {value ? "On" : "Off"}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
}

function Example2() {
  const [value, toggle] = useToggle(true, {
    true: "Yes",
    false: "No",
  });

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
}

function Example3() {
  const [value, toggle] = useToggle(true, {
    true: "Yes",
    false: "No",
  });

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => toggle(false)}>No</button>
      <button onClick={() => toggle(true)}>Yes</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Example />
      <Example2 />
      <Example3 />
    </>
  );
}

export default App;


```

## API

```typescript
type UseToggleState<T> = T | (() => T);

export interface UseToggleOptions<U, S> {
  true?: UseToggleState<U>;
  false?: UseToggleState<S>;
}

const [value, toggle]=useToggle = (
  initialValue?: UseToggleState<boolean>,
  options?: UseToggleOptions<U, S>,
): [boolean | U | S, (value?: boolean) => void]
```
