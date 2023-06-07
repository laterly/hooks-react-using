import { useState } from "react";
import { useOnceUpdateEffect } from "../../../../packages/hooks-react-using/src";
function UseOnceUpdateEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  useOnceUpdateEffect(() => {
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
export default UseOnceUpdateEffectDemo;
