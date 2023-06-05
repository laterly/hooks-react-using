import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../../packages/hooks-react-using/src";
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
