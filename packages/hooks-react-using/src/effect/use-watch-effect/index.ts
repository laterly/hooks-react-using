import { useEffect, useRef, DependencyList } from 'react';

type EffectCallback<T extends any[]> = (...args: T) => void;

const useWatchEffect = <T extends any[]>(
  effectCallback: EffectCallback<T>,
  deps: DependencyList,
) => {
  const preDeps = useRef<DependencyList>(deps);
  const stop = useRef(false);
  useEffect(() => {
    if (!stop.current) {
      const changes: [any, any][] = deps.map((dep, index) => {
        return [dep, preDeps.current[index]];
      });

      if (changes.some(([newDep, oldDep]) => newDep !== oldDep)) {
        effectCallback(...(changes as T));
      }

      preDeps.current = deps;
    }
  }, deps);
  return () => {
    stop.current = true;
  };
};

export default useWatchEffect;
