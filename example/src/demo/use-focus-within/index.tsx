import { useRef } from "react";
import { useFocusWithin } from "../../../../packages/hooks-react-using/src";

function MyComponent() {
  const target = useRef<null>(null);
  const isFocused = useFocusWithin(target, {
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
      <form ref={target}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="age" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <p>Input is focused: {isFocused ? "yes" : "no"}</p>
    </div>
  );
}
export default MyComponent;
