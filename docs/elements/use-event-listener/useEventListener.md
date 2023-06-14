# useEventListener

useEventListener 用于封装原生的 addEventListener 方法，使得在函数式组件中添加事件监听器更加方便

### 基础用法

```tsx
import { useState, useRef } from "react";
import { useEventListener } from "hooks-react-using";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const buttonRef = useRef(null);
  const buttonRef1 = useRef(null);

  function handleClick() {
    setCount(count + 1);
  }

  // Add event listener using our hook
  const cleanup = useEventListener("click", handleClick, {
    target: buttonRef,
  });

  const cleanup1 = useEventListener("keydown", (ev) => {
    setValue((ev as KeyboardEvent).code);
  });

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <div>{value}</div>
      <button ref={buttonRef}>Click me</button>
      <button onClick={()=>cleanup1()}></button>
      <button onClick={() => cleanup()}>Stop listening</button>
    </div>
  );
}
export default MyComponent;



```

## API

```typescript

type Target<T> = T | (() => T) | React.MutableRefObject<T> | Window | Document;

type Options = {
  target?: Target<Element | null>;
  capture?: boolean;
  passive?: boolean;
};

const clenup = useEventListener = (
  type: string,
  listener: EventListener,
  options?: Options,
): (() => void)

```