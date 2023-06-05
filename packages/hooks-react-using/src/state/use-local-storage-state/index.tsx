import { useState, useCallback } from 'react';
import { storage } from './storage';
function useLocalStorageState<T>(
  key: string,
  value: T,
): [
  T,
  {
    set: (value: T) => void;
    del: () => void;
    clear: () => void;
  },
] {
  const [state, setState] = useState(() => {
    const localStorageValue = storage.local.get<T>(key) || null;
    if (localStorageValue) {
      return localStorageValue;
    }
    storage.local.set<T>(key, value);
    return value;
  });

  const set = useCallback((value: T) => {
    setState(value);
    storage.local.set<T>(key, value);
  }, []);
  const del = useCallback(() => {
    //@ts-ignore
    setState('');
    storage.local.del(key);
  }, []);

  const clear = useCallback(() => {
    //@ts-ignore
    setState('');
    storage.local.clear();
  }, []);

  return [
    state,
    {
      set,
      del,
      clear,
    },
  ];
}
export default useLocalStorageState;
