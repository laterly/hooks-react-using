import React, { useState } from "react";
import { useWatchEffect } from "../../../../packages/hooks-react-using/src";

const Example: React.FC = () => {
  const [prev, setPrev] = useState(0);
  const [count, setCount] = useState(0);
  const stop = useWatchEffect(count, (curVal, oldVal) => {
    console.log("旧值oldVal: ", oldVal);
    console.log("新值curVal: ", curVal);
    if (oldVal) {
      setPrev(oldVal);
    }
  });
  const add = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      {" "}
      <p> 当前的count是{count}</p> <p> 前一次的count是{prev}</p> {count}{" "}
      <button onClick={add} className="btn">
        +
      </button>{" "}
      <button onClick={stop} className="btn">
        中止观察
      </button>{" "}
    </div>
  );
};
export default Example;
