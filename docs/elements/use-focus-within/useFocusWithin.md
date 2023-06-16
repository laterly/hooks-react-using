# useFocusWithin

useFocusWithin 监听元素的焦点变化

### 基础用法

```tsx
import { useRef } from "react";
import { useFocusWithin } from "hooks-react-using";

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isFocused = useFocusWithin(inputRef, {
    onBlur() {
      console.log("onBlue");
    },
    onFocus() {
      console.log("onFocus");
    },
    onChange() {
      console.log("focused");
    },
  });

  return (
    <div>
      <input ref={inputRef} />
      <div>{isFocused}</div>
      <p>Input is focused: {isFocused ? "yes" : "no"}</p>
    </div>
  );
}
export default MyComponent;

```

## API

```typescript

const isFocusWithin = useFocusWithin(
  target,
  {
   onFocus,
   onBlur,
   onChange
  }
);

```

## 参数类型

```typescript
type Target<T> = T | (() => T) | React.MutableRefObject<T>;
type UseFocusWithinOptions = {
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
  onChange: (isFocusWithin: boolean) => void;
};
function useFocusWithin<T extends Element>(
  target: Target<T | null>,
  options: UseFocusWithinOptions,
): boolean;
```
