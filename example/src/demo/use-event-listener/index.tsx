import { useState, useRef } from "react";
import { useEventListener } from "../../../../packages/hooks-react-using/src";

function MyComponent() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  function handleClick() {
    setCount(count + 1);
  }

  // Add event listener using our hook
  const cleanup = useEventListener("click", handleClick, {
    target: buttonRef,
  });

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button ref={buttonRef}>Click me</button>
      <button onClick={() => cleanup()}>Stop listening</button>
    </div>
  );
}
export default MyComponent;
