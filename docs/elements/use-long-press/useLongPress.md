# useLongPress

useLongPress 用于在长按某个元素时触发回调函数

### 基础用法

```tsx
import { useRef, useState } from "react";
import { useLongPress } from "hooks-react-using";

const MyComponent = () => {
  const buttonRef = useRef<null>(null);
  const [longPressed, setLongPressed] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0);

  useLongPress(
    () => {
      setLongPressed(true);
    },
    buttonRef,
    {
      delay: 1000,
      onClick() {
        setClickCount((val) => val + 1);
      },
    }
  );

  return (
    <>
      <div>longPressed{longPressed ? "true" : "false"}</div>
      <div>Click count {clickCount}</div>
      <button ref={buttonRef}>Click or Long Press Me</button>
      <button
        onClick={() => {
          setLongPressed(false);
        }}
      >
        Rest
      </button>
    </>
  );
};
export default MyComponent;

```

## API

```typescript

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

interface UseLongPressOptions {
  delay?: number;
  onClick?: (event: PointerEvent) => void;
}
function useLongPress<T extends Element>(
  handler: (evt: PointerEvent) => void,
  target: Target<T | null>,
  options: UseLongPressOptions = {},
)

```
