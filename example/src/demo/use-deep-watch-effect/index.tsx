import { useState } from "react";
import { useDeepWatchEffect } from "../../../../packages/hooks-react-using/src";
interface User {
  name?: string;
}
function MyComponent(): JSX.Element {
  const [user, setUser] = useState<User>({});

  const { cancel, reset } = useDeepWatchEffect<[User[], number[], string]>(
    ([newUserValue, oldUserValue]) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(newUserValue)}`
      );
    },
    [user]
  );

  return (
    <div>
      <div>{user.name}</div>

      <button
        onClick={() =>
          setUser(() => ({
            name: "小明",
          }))
        }
      >
        设置名字
      </button>
      <button
        onClick={() => {
          cancel();
        }}
      >
        取消观察
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        重新观察
      </button>
    </div>
  );
}
export default MyComponent;
