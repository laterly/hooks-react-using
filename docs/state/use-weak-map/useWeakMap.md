# useWeakMap

useWeakMap 管理new WeakMap()，用于创建一个映射对象的，它是一个弱引用版本的 Map。与 Map 不同的是，它只接受对象作为键，而且这些对象是弱引用的，即当该对象没有其他引用时，垃圾回收机制会将其自动清除

### 基础用法

```tsx
import { useEffect, useState } from "react";
import { useWeakMap } from "hooks-react-using";
const key = {};
const key2 = {a:1};
const key3 = {};
const Example = () => {
  const [isShow, setIsShow] = useState(true);
  const { set, setAll, get, deleteKey, has, reset, clear } =
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


```

## API

```typescript
const 
    { set, setAll, get, has, deleteKey, clear, reset } = useWeakMap();
```

## 参数类型

```typescript
type UseWeakMapEntry<K extends WeakKey, V> = [key: K, value: V];

type UseWeakMapEntryState<K extends WeakKey, V> =
  | Iterable<UseWeakMapEntry<K, V>>
  | WeakMap<K, V>;

type UseMapActions<K extends WeakKey, V> = {
  set: (key: K, value: V) => void;
  setAll: (entries: Iterable<[K, V]>) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  deleteKey: (key: K) => void;
  clear: () => void;
  reset: (initialEntry?: UseWeakMapEntryState<K, V>) => void;
};

type UseWeakMapReturn<K extends WeakKey, V> = UseMapActions<K, V>,


function useWeakMap<K extends WeakKey, V>(
  initialEntry?: UseWeakMapEntryState<K, V>,
): UseWeakMapReturn<K, V>
```


