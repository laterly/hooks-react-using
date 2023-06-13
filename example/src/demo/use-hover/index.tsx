import { useRef } from "react";
import { useHover } from "../../../../packages/hooks-react-using/src";

function MyComponent() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef, {
    delayEnter: 100,
    delayLeave: 100,
    onEnter() {
      console.log("ener");
    },
    onLeave() {
      console.log("leave");
    },
  });

  return <div ref={hoverRef}>{isHover ? "Hovered!" : "Hover over me!"}</div>;
}
export default MyComponent;
