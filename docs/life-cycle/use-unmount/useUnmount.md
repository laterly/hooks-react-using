# useUnmount

在组件卸载（unmount）时执行的 Hook。

### 基础用法

```jsx
import React, { useState } from "react";
import { useUnmount } from "hooks-react-using/src";

const DemoChild = () => {
  useUnmount(() => console.log("unmount"));
  return null;
};

const Demo = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      {isShow && <DemoChild />}

      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        点击
      </button>
    </>
  );
};
```

## API

```typescript
useUnmount(fn: () => void);
```


