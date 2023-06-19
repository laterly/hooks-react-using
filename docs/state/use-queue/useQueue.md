# useQueue

useQueue 简单的队列，用于管理队列数据结构

### 基础用法

```tsx
function Example() {
  const { queue, enqueue, dequeue, peek, size, isEmpty, first, last } = useQueue([
    "apple",
    "banana",
  ]);

  return (
    <div>
      <h1>Queue Example</h1>

      <p>Queue: {JSON.stringify(queue)}</p>

      <button onClick={() => enqueue(Date.now()?.toString())}>Enqueue</button>
      <button onClick={dequeue}>Dequeue</button>
      <button onClick={() => console.log(peek())}>Peek</button>

      <p>Size: {size}</p>
      <p>Is Empty? {JSON.stringify(isEmpty)}</p>
      <p>First: {JSON.stringify(first)}</p>
      <p>Last: {JSON.stringify(last)}</p>
    </div>
  );
}
export default Example;
```

## API

```typescript
const { queue, enqueue, dequeue, peek, size, isEmpty, first, last } = useQueue([]);
```

## 参数类型

```typescript
interface Queue<T> {
  queue: T[];
  enqueue: (item: T) => void;
  dequeue: () => T | undefined;
  peek: () => T | undefined;
  size: number;
  isEmpty: boolean;
  first: T | undefined;
  last: T | undefined;
}

function useQueue<T>(initialQueue: T[] = []): Queue<T>;
```