import { useState } from "react";
import { useWatchEffect } from "../../../../packages/hooks-react-using/src";
interface User {
  name?: string;
}
function MyComponent(): JSX.Element {
  const [user, setUser] = useState<User>({});
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const {cancel,reset} = useWatchEffect<[User[], number[], string]>(
    (
      [newUserValue, oldUserValue],
      [newCountValue, oldCountValue],
      [newNameValue, oldNameValue]
    ) => {
      console.log(
        `Changes detected: name from ${JSON.stringify(
          oldUserValue
        )} to ${JSON.stringify(
          newUserValue
        )}, count from ${oldCountValue} to ${newCountValue}, name from ${oldNameValue} to ${newNameValue}`
      );
    },
    [user, count, name]
  );

  return (
    <div>
      <div>{user.name}</div>
      <input
        type="text"
        value={user.name}
        placeholder="请输入用户名字"
        onChange={(event) =>
          setUser({
            name: event.target.value,
          })
        }
      />
      <input
        type="text"
        value={name}
        placeholder="请输入名字"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment count
      </button>
      <p>{count}</p>
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
