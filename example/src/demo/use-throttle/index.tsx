import { useState } from "react";
import { useThrottle } from "../../../../packages/hooks-react-using/src";

const UseThrottleDemo = () => {
  const [count, setCount] = useState(0);

  const throttledSetCount = useThrottle(count, {
    wait: 1000,
  });

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>throttledSetCount:{throttledSetCount}</p>
    </div>
  );
};
export default UseThrottleDemo;
