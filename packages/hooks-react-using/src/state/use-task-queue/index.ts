import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface Task {
  id: number;
  name: string;
  run?: () => void | Promise<void>;
}

interface TaskQueue {
  enqueue: (task: Task) => void;
  dequeue: () => void;
  size: number;
  first: Task | null;
  last: Task | null;
  running: Task | null;
  isEmpty: boolean;
}

interface useTaskQueueOptions {
  onlog: (message: string) => void;
}

function useTaskQueue(
  initialTasks: Task[],
  options?: useTaskQueueOptions,
): TaskQueue {
  const { onlog } = options || {};
  const queueRef = useRef<Task[]>(initialTasks);
  const [queue, setQueue] = useState<Task[]>(initialTasks);
  const [runningTask, setRunningTask] = useState<Task | null>(null);

  useEffect(() => {
    queueRef.current = initialTasks;
  }, [initialTasks]);

  useEffect(() => {
    async function runNextTask() {
      if (!runningTask && queue.length > 0) {
        const nextTask = queue[0];
        setRunningTask(nextTask);
        setQueue(prevQueue => prevQueue.slice(1));
        try {
          await nextTask.run?.();
          onlog?.(`Completed task ${nextTask.id}: ${nextTask.name}`);
        } catch (error: any) {
          onlog?.(
            `Error in task ${nextTask.id}: ${
              error?.message || error?.toString()
            }`,
          );
        } finally {
          setRunningTask(null);
        }
      }
    }

    runNextTask();
  }, [runningTask, queue, onlog]);

  const enqueue = useCallback((task: Task) => {
    setQueue(prevQueue => [...prevQueue, task]);
  }, []);

  const dequeue = useCallback(() => {
    if (runningTask === queue[0]) {
      onlog?.(
        `Cannot remove running task ${runningTask.id}: ${runningTask.name}`,
      );
      return;
    }
    setQueue(prevQueue => prevQueue.slice(1));
  }, [runningTask, queue, onlog]);

  const queueState = useMemo(() => {
    return {
      size: queue.length,
      first: queue.length > 0 ? queue[0] : null,
      last: queue.length > 0 ? queue[queue.length - 1] : null,
      isEmpty: queue.length === 0,
    };
  }, [queue]);

  return {
    enqueue,
    dequeue,
    running: runningTask,
    ...queueState,
  };
}

export default useTaskQueue;
