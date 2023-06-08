import { useLayoutEffect, useRef, DependencyList, useCallback } from 'react';

export type EffectCallback<T extends any[]> = (...args: T) => void;

const useWatchEffect = <T extends any[]>(
  effectCallback: EffectCallback<T>,
  deps: DependencyList,
) => {
  const preDeps = useRef<DependencyList>(deps);
  const stopRef = useRef(false);
  useLayoutEffect(() => {
    if (!stopRef.current) {
      const changes: [any, any][] = deps.map((dep, index) => {
        return [dep, preDeps.current[index]];
      });

      if (changes.some(([newDep, oldDep]) => newDep !== oldDep)) {
        effectCallback(...(changes as T));
      }

      preDeps.current = deps;
    }
  }, deps);
  const cancel = useCallback(() => {
    stopRef.current = true;
  }, []);
  const reset = useCallback(() => {
    stopRef.current = false;
  }, []);
  return {
    cancel,
    reset,
  };
};

export default useWatchEffect;
