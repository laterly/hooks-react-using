import { isWeakSet } from 'lodash-es';
import { useState, useCallback } from 'react';

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

const useWeakSet = <T extends object>(
  initialState?: UseSetState<T>,
): UseSetReturn<T> => {
  const [set, setSet] = useState(() => {
    if (!initialState) {
      return new WeakSet() as WeakSet<T>;
    }

    if (isWeakSet(initialState)) {
      return initialState as WeakSet<T>;
    }

    if (Array.isArray(initialState)) {
      return new WeakSet(initialState) as WeakSet<T>;
    }

    throw new Error('Invalid initial state for useWeakSet');
  });


  const [, setState] = useState<boolean>(false);

  const update = useCallback(() => {
    setState(val => !val);
  }, []);

  const add = useCallback((value: T) => {
    set.add(value);
    update();
  }, []);

  const remove = useCallback((value: T) => {
    set.delete(value);
    update();
  }, []);

  const clear = useCallback(() => {
    setSet(new WeakSet());
  }, []);

  const has = useCallback(
    (value: T) => {
      return set.has(value);
    },
    [set],
  );

  return [set, { add, remove, clear, has }];
};

export default useWeakSet;
