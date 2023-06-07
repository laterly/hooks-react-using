import { useEffect, useRef } from 'react';
const useOnceEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isFirstMounted = useRef(true);
  useEffect(() => {
    if (!isFirstMounted.current) {
      return;
    }
    isFirstMounted.current = false;
    effect();
  }, deps);
};

export default useOnceEffect;
