import { useState, useCallback, useMemo } from 'react';

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

const useQueue = <T>(initialQueue: T[] = []): Queue<T> => {
  const [queue, setQueue] = useState(initialQueue);

  const enqueue = useCallback((item: T) => {
    setQueue(prev => [...prev, item]);
  }, []);

  const dequeue = useCallback((): T | undefined => {
    if (queue.length === 0) {
      return;
    }

    const [first, ...rest] = queue;
    setQueue(rest);

    return first;
  }, [queue]);

  const peek = useCallback((): T | undefined => {
    if (queue.length === 0) {
      return undefined;
    }

    return queue[0];
  }, [queue]);

  const queueState = useMemo(() => {
    return {
      size: queue.length,
      isEmpty: queue.length === 0,
      first: queue[0] ? queue[0] : undefined,
      last: queue[queue.length - 1] ? queue[queue.length - 1] : undefined,
    };
  }, [queue]);

  return {
    queue,
    enqueue,
    dequeue,
    peek,
    ...queueState,
  };
};
export default useQueue;
