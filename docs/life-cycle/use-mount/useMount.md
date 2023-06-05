# useUnmount

在组件挂载载时执行的

### 基础用法

```jsx
import React, { useState } from "react";
import { useMount } from "@late-js/react-hooks";

const DemoChild = () => {
  useMount(() => console.log("mount"));
  return null;
};

const Demo = () => {
  const [isShow, setIsShow] = useState <boolean>(false);
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

