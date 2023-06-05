# useDebounceFn

useDebounceFn 可以有效地控制函数在多次触发中只会执行一次,接受两个参数：需要执行防抖操作的函数和可选的防抖选项。它会返回一个对象，其中包含三个方法：run、cancel 和 flush。

### 基础用法

```tsx
import React, { useEffect } from "react";
import { useDebounce } from "hooks-react-using";
const Example: React.FC = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, {
    wait: 500,
  });

  // API请求等操作都可以放在这里执行
  useEffect(() => {
    console.log("Debounced Value: ", debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <label>Value:</label>
      <input
        type="text"
        value={value}
        placeholder="请输入"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
export default Example;
```

## API

```typescript
interface Options {
  wait?: number
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}
const debounceValue = useDebounce(() => void,{ wait: Options });
```

## 参数

- func (Function): 要防抖动的函数。
- [wait=1000] (number): 需要延迟的毫秒数。
- [options=] (Object): 选项对象。
- [options.leading=false] (boolean): 指定在延迟开始前调用。
- [options.maxWait] (number): 设置 func 允许被延迟的最大值。
- [options.trailing=true] (boolean): 指定在延迟结束后调用。
