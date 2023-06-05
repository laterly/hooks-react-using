import { useEffect, useState } from 'react';
import { debounce } from 'lodash-es';
import type { DebounceSettings } from 'lodash-es/debounce';

interface Options extends DebounceSettings {
  wait?: number;
}

function useDebounce<T>(initialState: T, options?: Options) {
  const { wait = 1000, ...restOptions } = options || {};
  const [debouncedState, setDebouncedState] = useState<T>();
  useEffect(() => {
    const debounceHandler = debounce(setDebouncedState, wait, {
      ...restOptions,
    });
    debounceHandler(initialState);
    return () => {
      debounceHandler.cancel();
    };
  }, [initialState]);
  return debouncedState;
}

export default useDebounce;
