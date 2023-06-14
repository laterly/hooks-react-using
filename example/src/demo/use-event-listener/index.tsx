import { useState, useRef } from "react";
import { useEventListener } from "../../../../packages/hooks-react-using/src";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const buttonRef = useRef(null);
  const buttonRef1 = useRef(null);

  function handleClick() {
    setCount(count + 1);
  }

  // Add event listener using our hook
  const cleanup = useEventListener("click", handleClick, {
    target: buttonRef,
  });

  const cleanup1 = useEventListener("keydown", (ev) => {
    setValue((ev as KeyboardEvent).code);
  });

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <div>{value}</div>
      <button ref={buttonRef}>Click me</button>
      <button onClick={()=>cleanup1()}></button>
      <button onClick={() => cleanup()}>Stop listening</button>
    </div>
  );
}
export default MyComponent;
