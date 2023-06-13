import { useRef } from "react";
import { useElementSize } from "../../../../packages/hooks-react-using/src";
const MyComponent = () => {
  const targetRef = useRef(null);
  const size = useElementSize(targetRef);

  return (
    <div ref={targetRef}>
      Size: {size.width} x {size.height}
    </div>
  );
};

export default MyComponent;