import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

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
): TaskQueueReturn {
  const { onlog, onSuccess, onError } = options || {};
  const queueRef = useRef<Task[]>(initialTasks || []);
  const [queue, setQueue] = useState<Task[]>(initialTasks || []);
  const [runningTask, setRunningTask] = useState<Task | null>(null);

  useEffect(() => {
    queueRef.current = initialTasks || [];
  }, [initialTasks]);

  useEffect(() => {
    async function runNextTask() {
      if (!runningTask && queue.length > 0) {
        const [nextTask, ...rest] = queue;
        setRunningTask(nextTask);
        setQueue(rest);
        try {
          await nextTask.run?.();
          onlog?.(`Completed task ${nextTask?.id}: ${nextTask?.name}`);
          onSuccess?.(nextTask);
        } catch (error: any) {
          onlog?.(
            `Error in task ${nextTask?.id}: ${
              error?.message || error?.toString()
            }`,
          );
          onError?.(nextTask, error?.message || error?.toString());
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
    const [first, ...rest] = queue;
    setQueue(rest);
    return first;
  }, [runningTask, queue, onlog]);

  const peek = useCallback((): Task | undefined => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue[0];
  }, [queue]);

  const queueState = useMemo(() => {
    return {
      size: queue.length,
      first: queue.length > 0 ? queue[0] : null,
      last: queue.length > 0 ? queue[queue.length - 1] : null,
      isEmpty: queue.length === 0,
    };
  }, [queue]);
  

  return {
    queue,
    enqueue,
    dequeue,
    peek,
    running: runningTask,
    ...queueState,
  };
}

export default useTaskQueue;
