import { useLayoutEffect, useRef } from 'react';
const useOnceLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isFirstMounted = useRef(true);
  useLayoutEffect(() => {
    if (!isFirstMounted.current) {
      return;
    }
    isFirstMounted.current = false;
    effect();
  }, deps);
};

export default useOnceLayoutEffect;
