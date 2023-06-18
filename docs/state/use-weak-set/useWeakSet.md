# useWeakSet

useWeakSet 管理 new WeakSet() 集合类型的数据结构，与 Set 对象不同，WeakSet 对象只能存储对象引用，而且这些引用都是弱引用。也就是说，如果一个对象只被 WeakSet 对象持有，那么当这个对象没有任何其他引用时，它将会被自动垃圾回收

### 基础用法

```tsx
import { useEffect } from "react";
import { useWeakSet } from "../../../../packages/hooks-react-using/src";

type Item = {
  id: number;
  name: string;
};

const itemList: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function App() {
  const [set, { add, has, remove }] = useWeakSet<Item>();
  const handleItemClick = (item: Item) => {
    if (has(item)) {
      remove(item);
    } else {
      add(item);
    }
  };

  return (
    <div>
      <h2>Selected Items:</h2>
      <h2>Available Items:</h2>
      <ul>
        {itemList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{ fontWeight: has(item) ? "bold" : "normal" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



```

## API

```typescript
const [set, { add, remove, clear, has }]; = useWeakSet();
```

## 参数类型

```typescript

type UseSetState<T extends object> = Iterable<T> | WeakSet<T>;

type UseSetReturn<T extends object> = [
  WeakSet<T>,
  {
    add: (value: T) => void;
    remove: (value: T) => void;
    clear: () => void;
    has: (value: T) => boolean;
  },
];

function useWeakSet<T extends object>(
  initialState?: UseSetState<T>,
): UseSetReturn<T>
```


