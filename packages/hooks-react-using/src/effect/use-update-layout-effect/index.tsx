import { useLayoutEffect, useRef } from 'react';
const useUpdateLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    return effect();
  }, deps);
};

export default useUpdateLayoutEffect;
