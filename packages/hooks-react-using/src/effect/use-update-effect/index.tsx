import { useEffect, useRef } from 'react';
const useUpdateEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    return effect();
  }, deps);
};

export default useUpdateEffect;
