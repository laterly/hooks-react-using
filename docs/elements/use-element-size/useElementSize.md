# useElementSize

useElementSize 可以用于获取DOM元素的尺寸信息

### 基础用法

```tsx
import { useRef } from "react";
import { useElementSize } from "hooks-react-using";
const MyComponent = () => {
  const targetRef = useRef(null);
  const size = useElementSize(targetRef);

  return (
    <div ref={targetRef}>
      Size: {size.width} x {size.height}
    </div>
  );
};

export default MyComponent;

```

## API

```typescript

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

const { width:number,height:number} = useElementSize(target);

```