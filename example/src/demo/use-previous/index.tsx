import { useState } from "react";
import { usePrevious } from "../../../../packages/hooks-react-using/src";
const UsePreviousDemo = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount !== undefined ? prevCount : "N/A"}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default UsePreviousDemo;
