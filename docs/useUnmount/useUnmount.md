# useUnmount

在组件卸载（unmount）时执行的 Hook。

## 代码演示

### 基础用法

```jsx
import React, { useState } from "react";
import { useUnmount } from "@latejs/react-hooks";

const DemoChild = () => {
  useUnmount(() => console.log("unmount"));
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
