import { useEffect, useState } from "react";
import { useWeakMap } from "../../../../packages/hooks-react-using/src";
const key = {};
const key2 = {a:1};
const key3 = {};
const Example = () => {
  const [isShow, setIsShow] = useState(true);
  const [weakMap, { set, setAll, get, deleteKey, has, reset, clear }] =
    useWeakMap<object, string | number>([[key, "hello world"]]);
  useEffect(() => {
    console.log("121", weakMap);
  }, [weakMap]);

  return (
    <>
      <button
        onClick={() => {
          setIsShow((val) => !val);
        }}
      >
        toggle
      </button>
      {isShow && (
        <div>
          <button type="button" onClick={() => set(key, Date.now())}>
            Add
          </button>
          <button
            type="button"
            onClick={() =>
              setAll([
                [key, "number"],
                [key2, "number2"],
              ])
            }
          >
            Add 多条
          </button>
          <button
            type="button"
            onClick={() => deleteKey(key)}
            disabled={!has(key)}
          >
            delete message
          </button>
          <div>get key:{get(key)}</div>
          <div>get key2:{get(key2)}</div>
          <div>get key3:{get(key3)}</div>
          <button
            onClick={() => {
              reset([[key3, "reset message"]]);
            }}
          >
            重置会将数据全部重置为当前的数据，不传则清空
          </button>
          <button
            onClick={() => {
              clear();
            }}
          >
            清空
          </button>
       
        </div>
      )}
    </>
  );
};

export default Example;
