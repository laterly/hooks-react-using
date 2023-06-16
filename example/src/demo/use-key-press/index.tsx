import { useState } from "react";
import { useKeyPress } from "../../../../packages/hooks-react-using/src";
const Example = () => {
  const [num, setNum] = useState<string>();
  const [key, setKey] = useState<string>();
  const [state, setState] = useState<number>(0);

  useKeyPress(
    ["o", "p"],
    () => {
      setState((num) => num + 1);
    },
    {
      combination: true,
    }
  );
  const filterKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  useKeyPress(filterKey, (event) => {
    setNum(event.key);
  });
  //d、f、g、h,2,3
  useKeyPress([68,70,71,72, 2, "3"], (event) => {
    setKey(event.key);
  });

  return (
    <div>
      <p>state: {state}</p>
      <p>: </p>
      <div>
        数字输入0-9 [0-9]: {num}
      </div>
      <div>
        匹配keyCode [d, f, g, h, 2, 3]:
        <span>{key}</span>
      </div>
    </div>
  );
};
export default Example;
