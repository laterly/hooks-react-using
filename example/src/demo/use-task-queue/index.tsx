import { useTaskQueue } from "../../../../packages/hooks-react-using/src";
function App() {
  function handleLog(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  const initialTasks = [
    {
      id: 1,
      name: "Task 1",
      run: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Task 1 completed");
      },
    },
    {
      id: 2,
      name: "Task 2",
      run: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        throw new Error("Task 2 failed");
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

  const { enqueue, dequeue, running, first, last, size } = useTaskQueue(
    initialTasks,
    {
      log: handleLog,
    }
  );

  function handleAddTask() {
    const newTask = {
      id: Math.random(),
      name: `Task ${size + 1}`,
      run: async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 5000)
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
      <h1>任务队列</h1>
      <p>当前队列的大小: {size}</p>
      <p>队列最前面一个: {first?.name ?? "-"}</p>
      <p>队列最后面一个: {last?.name ?? "-"}</p>
      <p>正在执行的队列: {running?.name ?? "-"}</p>
      <button onClick={handleAddTask}>添加队列</button>
      <button onClick={handleRemoveTask}>移除队列</button>
    </div>
  );
}

export default App;
