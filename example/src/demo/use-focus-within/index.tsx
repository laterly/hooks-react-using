import { useRef } from "react";
import { useFocusWithin } from "../../../../packages/hooks-react-using/src";

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isFocused = useFocusWithin(inputRef, {
    onBlur() {
      console.log("onBlue");
    },
    onFocus() {
      console.log("onFocus");
    },
    onChange() {
      console.log("focused");
    },
  });

  return (
    <div>
      <input ref={inputRef} />
      <div>{isFocused}</div>
      <p>Input is focused: {isFocused ? "yes" : "no"}</p>
    </div>
  );
}
export default MyComponent;
