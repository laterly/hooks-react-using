# useSetState

管理 object 类型 state 的 Hooks，用法与 class 组件的 this.setState 基本一致。

### 基础用法

```tsx
import React from "react";
import { useSetState } from "@late-js/react-hooks";
//使用例子
interface UserInfo {
  age?: number;
  name?: string;
  list?: number[];
}
const Example: React.FC = () => {
  const [info, setInfo] = useSetState<UserInfo>({
    age: 1,
    name: '小王',
    list: [],
  });
  return (
    <div>
      <div>年龄:{info.age}</div>
      <div>名字:{info.name}</div>
      <div>
        列表:
        {info?.list?.map((item: number, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {/**
       *更新了name和age，直接通过对象的方式
       */}
      <button onClick={() => setInfo({ name: '小明', age: 12 })}>
        根据对象更新
      </button>
      {/**
       * 更新name，通过key的方式
       */}
      <button onClick={() => setInfo('name', '小光')}>更新对应的name</button>
      {/**
       * 更新列表通过回调返回值的形式
       */}
      <button
        onClick={() =>
          setInfo('list', (list: number[]) => {
            const newArr = [...list];
            newArr.push(1);
            console.log('newArr', newArr);
            return newArr;
          })
        }
      >
        更新列表2
      </button>
    </div>
  );
};
export default Example;
```

## API

```typescript
const [state, setState] = useSetState<T>(initialState);
```


