import { useLayoutEffect, useRef, DependencyList, useCallback } from 'react';
import { EffectCallback } from '../use-watch-effect';

const useWatchLayoutEffect = <T extends any[]>(
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

      if (changes.some(([newDep, oldDep]) => !Object.is(newDep, oldDep))) {
        const changedDeps = changes.map(([curDep, oldDep], index) => {
          return {
            objectIs: Object.is(curDep, oldDep),
            index,
          };
        }).filter(item=>!item.objectIs)?.map(item=>item.index);
        effectCallback(...(changes as T), changedDeps);
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

export default useWatchLayoutEffect;
