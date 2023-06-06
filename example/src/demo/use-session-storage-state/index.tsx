import React from "react";
import { useSessionStorageState } from "../../../../packages/hooks-react-using/src";

const Example: React.FC = () => {
  const [state, { set, del, clear }] = useSessionStorageState<number>(
    "local-key",
    0
  );

  return (
    <div>
      <input
        type="text"
        placeholder="分数"
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          set(Number(e.target.value));
        }}
      />
      <p>更新分数： {state}</p>
      <button
        onClick={() => {
          del();
        }}
      >
        清空分数
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        全部清空
      </button>
    </div>
  );
};

export default Example;
