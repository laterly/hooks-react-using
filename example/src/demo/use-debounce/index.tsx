import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../../packages/hooks-react-using/src";
const Example: React.FC = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, {
    wait: 500,
  });

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
      <label>debouncedValue:</label>
      <div>{debouncedValue}</div>
    </div>
  );
};
export default Example;
