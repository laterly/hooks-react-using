# useDeepCompareLayoutEffect

useDeepCompareLayoutEffect 与 useLayoutEffect 类似，用于在函数组件中实现具有深比较   

### 基础用法

```tsx
import { useEffect, useRef, useState } from "react";
import { cloneDeep } from "lodash-es";
import { useDeepCompareLayoutEffect } from "../../../../packages/hooks-react-using/src";
const UseDeepCompareLayoutEffectDemo = () => {
  const [myObject, setMyObject] = useState({
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming"],
  });
  const ref = useRef(0);
  const deepRef = useRef(0);

  useDeepCompareLayoutEffect(() => {
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
export default UseDeepCompareLayoutEffectDemo;
```

## API

```typescript
useDeepCompareEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
);
```

## 参数
