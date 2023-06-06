import { useRef, useMemo, useEffect } from 'react';
import { debounce } from 'lodash-es';
import type { DebounceSettings } from 'lodash-es/debounce';

export interface Options extends DebounceSettings {
  wait?: number;
}

function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  options?: Options,
) {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  const debouncedFn = useMemo(() => {
    const { wait = 1000, ...restOptions } = options || {};

    return debounce(fnRef.current, wait, {
      ...restOptions,
    });
  }, []);

  useEffect(
    () => () => {
      debouncedFn.cancel?.();
    },
    [],
  );

  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}

export default useDebounceFn;
