import { useRef, useState } from "react";
import { useLongPress } from "../../../../packages/hooks-react-using/src";

const MyComponent = () => {
  const buttonRef = useRef<null>(null);
  const [longPressed, setLongPressed] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0);

  useLongPress(
    () => {
      setLongPressed(true);
    },
    buttonRef,
    {
      delay: 1000,
      onClick() {
        setClickCount((val) => val + 1);
      },
    }
  );

  return (
    <>
      <div>longPressed{longPressed ? "true" : "false"}</div>
      <div>Click count {clickCount}</div>
      <button ref={buttonRef}>Click or Long Press Me</button>
      <button
        onClick={() => {
          setLongPressed(false);
        }}
      >
        Rest
      </button>
    </>
  );
};
export default MyComponent;
