import { isSet } from 'lodash-es';
import { useState, useCallback, useMemo } from 'react';

type UseSetState<T> = Iterable<T> | Set<T>;

type UseSetReturn<T> = [
  Set<T>,
  {
    add: (value: T) => void;
    remove: (value: T) => void;
    clear: () => void;
    has: (value: T) => boolean;
    keys: () => IterableIterator<T>;
    values: () => IterableIterator<T>;
    entries: () => IterableIterator<[T, T]>;
    size: number;
  },
];

const useSet = <T>(initialState?: UseSetState<T>): UseSetReturn<T> => {
  const [set, setSet] = useState(() => {
    if (!initialState) {
      return new Set() as Set<T>;
    }

    if (isSet(initialState)) {
      return initialState as Set<T>;
    }

    if (Array.isArray(initialState)) {
      return new Set(initialState) as Set<T>;
    }

    throw new Error('Invalid initial state for useSet');
  });

  const add = useCallback((value: T) => {
    setSet(prevSet => {
      prevSet.add(value);
      return new Set([...prevSet]);
    });
  }, []);

  const remove = useCallback((value: T) => {
    setSet(prevSet => {
      prevSet.delete(value);
      return new Set([...prevSet]);
    });
  }, []);

  const clear = useCallback(() => {
    if (set.size > 0) {
      set.clear();
      setSet(new Set());
    }
  }, []);

  const has = useCallback(
    (value: T) => {
      return set.has(value);
    },
    [set],
  );
  const keys = useCallback(() => set.keys(), [set]);

  const values = useCallback(() => set.values(), [set]);

  const entries = useCallback(() => set.entries(), [set]);

  const size = useMemo(() => set.size, [set]);

  return [set, { add, remove, clear, has, keys, values, entries, size }];
};

export default useSet;
