import React, { useState } from "react";
import { useThrottleFn } from "../../../../packages/hooks-react-using/src";
const UseThrottleFnDemo: React.FC = () => {
  const [position, setPosition] = useState(0);

  const { run } = useThrottleFn(
    (e: any) => {
      setPosition(e.target.scrollTop);
      // 实际的滚动逻辑
    },
    {
      wait: 1000,
    }
  );
  return (
    <>
      <div onScroll={run} style={{ overflowY: "scroll", height: "100px" }}>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
          <li>Pineapple</li>
          <li>Grape</li>
          <li>Watermelon</li>
          <li>Strawberry</li>
          <li>Mango</li>
          <li>Pear</li>
          <li>Kiwi</li>
        </ul>
      </div>
      <div>position:{position}</div>
    </>
  );
};

export default UseThrottleFnDemo;
