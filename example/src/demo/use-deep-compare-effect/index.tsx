import { useEffect, useRef, useState } from "react";
import { cloneDeep } from "lodash-es";
import { useDeepCompareEffect } from "../../../../packages/hooks-react-using/src";
const UseDeepCompareEffectDemo = () => {
  const [myObject, setMyObject] = useState({
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming"],
  });
  const ref = useRef(0);
  const deepRef = useRef(0);

  useDeepCompareEffect(() => {
    deepRef.current += 1;
  }, [myObject]);

  useEffect(()=>{
    ref.current += 1;
  },[myObject])

  const handleClick = () => {
    const newObject = cloneDeep(myObject); // 深度复制对象
    // newObject.age += 1;
    setMyObject(newObject);
  };

  return (
    <div>
      <p>Name: {myObject.name}</p>
      <p>Age: {myObject.age}</p>
      <p>Hobbies: {myObject.hobbies.join(", ")}</p>
      <button onClick={handleClick}>Add Age</button>
      <p>ref:{ref.current}</p>
      <p>deepRef:{deepRef.current}</p>
    </div>
  );
};
export default UseDeepCompareEffectDemo;
