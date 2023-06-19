import { useState, useEffect, useCallback, useMemo } from 'react';

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

export function useQueue<T>(initialQueue: T[] = []): Queue<T> {
  const [queue, setQueue] = useState(initialQueue);

  const enqueue = useCallback((item: T) => {
    setQueue((prev) => [...prev, item]);
  }, []);

  const dequeue = useCallback((): T | undefined => {
    if (queue.length === 0) {
      return undefined;
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

  const size = useMemo(() => {
    return queue.length;
  }, [queue]);

  const isEmpty = useMemo(() => {
    return queue.length === 0;
  }, [queue]);

  const first = useMemo(() => {
    return queue[0];
  }, [queue]);

  const last = useMemo(() => {
    return queue[queue.length - 1];
  }, [queue]);

  useEffect(() => {
    setQueue(initialQueue);
  }, [initialQueue]);

  return {
    queue,
    enqueue,
    dequeue,
    peek,
    size,
    isEmpty,
    first,
    last,
  };
}