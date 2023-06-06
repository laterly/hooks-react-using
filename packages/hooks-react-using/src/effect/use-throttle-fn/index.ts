import { useRef, useMemo, useEffect } from 'react';
import { throttle } from 'lodash-es';
import type { ThrottleSettings } from 'lodash-es/throttle';

export interface Options extends ThrottleSettings {
  wait?: number;
}

function useThrottleFn<T extends (...args: any[]) => any>(
  fn: T,
  options?: Options,
) {
  const fnRef = useRef(fn);

  fnRef.current = fn;

  const throttleFn = useMemo(() => {
    const { wait = 1000, ...restOptions } = options || {};

    return throttle(fnRef.current, wait, {
      ...restOptions,
    });
  }, []);

  useEffect(
    () => () => {
      throttleFn.cancel?.();
    },
    [],
  );

  return {
    run: throttleFn,
    cancel: throttleFn.cancel,
    flush: throttleFn.flush,
  };
}

export default useThrottleFn;
