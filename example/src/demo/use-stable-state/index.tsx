import { FC, useEffect, useState } from "react";
import { useStableState } from "../../../../packages/hooks-react-using/src";
interface User {
  name: string;
}
const MyComponent: FC = () => {
  const [value, setValue] = useStableState<User>({ name: "value" });

  const [otherValue, setOtherValue] = useState<User>({ name: "other value" });

  useEffect(() => {
    console.log("value导致更新");
  }, [value]);

  useEffect(() => {
    console.log("otherValue导致更新");
  }, [otherValue]);

  return (
    <div>
      <p>value:{value?.name}</p>
      <p>otherValue:{otherValue.name}</p>
      <button onClick={() => setValue({ name: "new value" })}>
        Update value
      </button>
      <button
        onClick={() =>
          setValue(() => {
            return { name: "new value" };
          })
        }
      >
        Update value
      </button>
      <button onClick={() => setOtherValue({ name: "new value" })}>
        Update otherValue
      </button>
    </div>
  );
};

export default MyComponent;
