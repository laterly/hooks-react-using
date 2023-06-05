# useDebounceFn

useDebounceFn 可以有效地控制函数在多次触发中只会执行一次,接受两个参数：需要执行防抖操作的函数和可选的防抖选项。它会返回一个对象，其中包含三个方法：run、cancel 和 flush。

### 基础用法

```tsx
import React from "react";
import { useDebounceFn } from "hooks-react-using";
const Excample: React.FC = () => {
  const { run, cancel, flush } = useDebounceFn(
    () => {
      console.log("Clicked");
    },
    { wait: 1000 }
  );
  return (
    <>
      <button onClick={run}>Run debounced function</button>
      <button onClick={cancel}>Cancel debounced function</button>
      <button onClick={flush}>Flush debounced function</button>
    </>
  );
};
export default Excample;
```

## API

```typescript
interface Options {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}
const { run, cancel, flush } = useDebounceFn(() => void,{ wait: Options });
```

## 参数
- func (Function): 要防抖动的函数。
- [wait=0] (number): 需要延迟的毫秒数。
- [options=] (Object): 选项对象。
- [options.leading=false] (boolean): 指定在延迟开始前调用。
- [options.maxWait] (number): 设置 func 允许被延迟的最大值。
- [options.trailing=true] (boolean): 指定在延迟结束后调用。
