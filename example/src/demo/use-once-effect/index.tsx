import { useState } from "react";
import { useOnceEffect } from "../../../../packages/hooks-react-using/src";
function UseOnceEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  useOnceEffect(() => {
    setChangeCount(count);
  }, [count]);

  return (
    <div>
      <div>count:{count}</div>
      <div>changeCount:{changeCount}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
}
export default UseOnceEffectDemo;
