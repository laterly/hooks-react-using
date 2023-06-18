# useMap

useMap 管理new Map()，用于创建一个映射对象的

### 基础用法

```tsx
import { useEffect, useState } from "react";
import { useMap } from "hooks-react-using";

const Example = () => {
  const [isShow, setIsShow] = useState(true);
  const [map, { set, setAll, get, deleteKey, entries, has, reset, clear }] =
    useMap<string | number | object, string | number>([
      ["message", "hello world"],
      [455, "number"],
      [{ a: 1 }, "object"],
    ]);
  useEffect(() => {
    console.log("121", map);
  }, [map]);

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
          <button
            type="button"
            onClick={() => set(String(Date.now()), Date.now())}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() =>
              setAll([
                ["message", "hello world"],
                [455, "number"],
                ["new1", "new1"],
                ["new2", "new2"],
              ])
            }
          >
            Add 多条
          </button>
          <button
            type="button"
            onClick={() => deleteKey("message")}
            disabled={!has("message")}
          >
            delete message
          </button>
          <div>get:{get("message")}</div>
          <div>
            {Array.from(entries()).map((entry, index) => (
              <p key={index}>
                {JSON.stringify(entry?.[0])}: {entry?.[1]}
              </p>
            ))}
          </div>
          <button
            onClick={() => {
              reset([["message", "reset message"]]);
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
          <div>
            <pre>{JSON.stringify(Array.from(map), null, 2)}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Example;

```

## API

```typescript
const [
    map,
    { set, get, has, deleteKey, clear, keys, values, entries, reset, setAll },
  ] = useMap();
```

## 参数类型

```typescript
type UseMapEntry<K, V> = [key: K, value: V];

type UseMapEntryState<K, V> = Iterable<UseMapEntry<K, V>> | Map<K, V>;

type UseMapActions<K, V> = {
  set: (key: K, value: V) => void;
  setAll: (newEntry: UseMapEntryState<K, V>) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  deleteKey: (key: K) => void;
  clear: () => void;
  keys: () => IterableIterator<K>;
  values: () => IterableIterator<V>;
  entries: () => IterableIterator<UseMapEntry<K, V>>;
  reset: (initialEntry?: UseMapEntryState<K, V>) => void;
};

type UseMapReturn<K, V> = [Map<K, V>, UseMapActions<K, V>];

function useMap<K, V = any>(
  initialEntry?: UseMapEntryState<K, V>,
): UseMapReturn<K, V>
```


