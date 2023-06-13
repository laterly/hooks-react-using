# useHover

useHover 鼠标是否正在悬停目标元素上

### 基础用法

```tsx
import { useRef } from "react";
import { useHover } from "hooks-react-using";

function MyComponent() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef, {
    delayEnter: 100,
    delayLeave: 100,
    onEnter() {
      console.log("ener");
    },
    onLeave() {
      console.log("leave");
    },
  });

  return <div ref={hoverRef}>{isHover ? "Hovered!" : "Hover over me!"}</div>;
}
export default MyComponent;
```

## API

```typescript

type UseHoverOptions = {
  delayEnter?: number;
  delayLeave?: number;
  onLeave?:()=>void;
  onEnter?:()=>void;
};

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

const isHovering = useHover(
  target,
  {
   delayEnter,
   delayLeave
   onEnter,
   onLeave,
  }
);

```
