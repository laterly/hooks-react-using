# useUnmount

在组件挂载载时执行的

## 代码演示

### 基础用法

```jsx
import React, { useState } from "react";
import { useMount } from "@latejs/react-hooks";

const DemoChild = () => {
  useMount(() => console.log("mount"));
  return null;
};

const Demo = () => {
  const [isShow, setIsShow] = useState < boolean > false;
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

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |
