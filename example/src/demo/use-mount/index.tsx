import { useState } from "react";
import { useMount } from "../../../../packages/hooks-react-using/src";

const DemoChild = () => {
  useMount(() => console.log("mount"));
  return null;
};

const Demo = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <>
      {isShow && <DemoChild />}

      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        点击
      </button>
      <button onClick={() => {add()}}>add</button>
    </>
  );
};
export default Demo;
