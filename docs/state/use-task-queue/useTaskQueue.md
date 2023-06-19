# useTaskQueue

useTaskQueue 任务队列，用于管理队列数据结构，主要处理异步任务的队列

### 基础用法

```tsx
import { useTaskQueue } from "hooks-react-using";
function Example() {
  function handleLog(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  const initialTasks = [
    {
      id: 1,
      name: "Task 1",
      run: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      },
    },
    {
      id: 2,
      name: "Task 2",
      run: async () => {
        await new Promise((resolve, reject) => setTimeout(reject, 2000));
      },
    },
    {
      id: 3,
      name: "Task 3",
      run: async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      },
    },
  ];

  const { queue, enqueue, dequeue, running, peek, first, last, size, isEmpty } =
    useTaskQueue(initialTasks, {
      onlog: handleLog,
      onSuccess: (task) => {
        console.log("success task", task);
      },
      onError(task, error) {
        console.log("error task", task, error);
      },
    });

  function handleAddTask() {
    const newTask = {
      id: Math.random(),
      name: `Task ${size + 1}`,
      run: async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 3000)
        );
        console.log(`Task ${newTask.id} completed`);
      },
    };
    enqueue(newTask);
  }

  function handleRemoveTask() {
    dequeue();
  }

  return (
    <div>
      <h1>当前所有任务：</h1>
      {queue?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <p>当前队列的大小: {size}</p>
      <p>是否还有: {JSON.stringify(isEmpty)}</p>
      <p>队列最前面一个: {first?.name ?? "-"}</p>
      <p>队列最后面一个: {last?.name ?? "-"}</p>
      <p>正在执行的队列: {running?.name ?? "-"}</p>
      <button onClick={() => console.log(peek())}>Peek</button>
      <button onClick={handleAddTask}>入队</button>
      <button onClick={handleRemoveTask}>出队</button>
    </div>
  );
}

export default Example;

```

## API

```typescript
const { queue, enqueue, dequeue, running, peek, first, last, size, isEmpty } = useTaskQueue(initialTasks, {
    onlog: (message)=>{},
    onSuccess: (task) => {},
    onError(task, error) {},
});
```

## 参数类型

```typescript
interface Task {
  id?: number;
  name?: string;
  run?: () => void | Promise<void>;
  extra?: Record<string, any>; //支持额外数据
}

interface TaskQueueReturn {
  queue: Task[];
  enqueue: (task: Task) => void;
  dequeue: () => Task | undefined;
  peek: () => Task | undefined;
  size: number;
  first: Task | null;
  last: Task | null;
  running: Task | null;
  isEmpty: boolean;
}

interface useTaskQueueOptions {
  onlog?: (message: string) => void;
  onSuccess?: (task: Task) => void;
  onError?: (task: Task, error: string) => void;
}

function useTaskQueue(
  initialTasks?: Task[],
  options?: useTaskQueueOptions,
): TaskQueueReturn;
```