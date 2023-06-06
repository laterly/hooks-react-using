import React, { useState } from "react";
import { useDebounceEffect } from "../../../../packages/hooks-react-using/src";
const UseDebounceEffectDemo: React.FC = () => {
  const [count, setCount] = useState("");
  const [debounceCount, setDebounceCount] = useState("");
  const [isDebounce, setIsDebounce] = useState<boolean>(false);
  useDebounceEffect(
    () => {
      setDebounceCount(count + "debounce");
    },
    [count],
    {
      wait: 1000,
    }
  );

  useDebounceEffect(
    () => {
      setIsDebounce(true);
    },
    [],
    {
      wait: 1000,
    }
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCount(value);
  };

  return (
    <div>
      <input type="number" value={count} onChange={handleInputChange} />
      <p>count:{count}</p>
      <p>debounceCount: {debounceCount}</p>
      <p>isDebounce:{isDebounce ? "true" : "false"}</p>
    </div>
  );
};
export default UseDebounceEffectDemo;
