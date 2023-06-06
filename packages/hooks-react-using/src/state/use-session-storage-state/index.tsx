import { useState, useCallback } from 'react';
import { storage } from './storage';
function useSessionStorageState<T>(
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
    const sessionStorageValue = storage.session.get<T>(key) || null;
    if (sessionStorageValue) {
      return sessionStorageValue;
    }
    storage.session.set<T>(key, value);
    return value;
  });

  const set = useCallback((value: T) => {
    setState(value);
    storage.session.set<T>(key, value);
  }, []);
  const del = useCallback(() => {
    //@ts-ignore
    setState('');
    storage.session.del(key);
  }, []);

  const clear = useCallback(() => {
    //@ts-ignore
    setState('');
    storage.session.clear();
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
export default useSessionStorageState;
