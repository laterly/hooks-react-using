# useDebounce

useDebounce 用于处理防抖值。在某些场景下，当用户频繁触发某个操作时（例如输入框搜索），会导致大量的请求发送到服务器或执行重复的计算，影响页面性能和用户体验。使用 useDebounce 可以设置一个时间间隔，在这段时间内只执行一次操作，避免过多的请求或计算。

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
