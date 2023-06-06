import { useState } from "react";
import { useAsyncEffect } from "../../../../packages/hooks-react-using/src";
const featData = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["1", "2", "3"]);
    }, 3000);
  });
};
const Child = () => {
  const [data, setData] = useState<string[]>();
  useAsyncEffect(async () => {
    const initData = ["1", "2"];
    const data = await featData();
    const initData2 = ["2", "3"];
    const data1 = await featData();
    setData([...initData, ...data, ...initData2, ...data1]);
    return async () => {
      console.log("clean23");
    };
  }, []);
  return (
    <>
      {data?.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};
const UseAsyncEffectDemo = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <>
      {isShow && <Child />}
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        关闭
      </button>
    </>
  );
};

export default UseAsyncEffectDemo;
