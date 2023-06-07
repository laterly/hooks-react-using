import { useRef } from 'react';
import useUpdateLayoutEffect from '../use-update-layout-effect';
const useOnceUpdateLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isFirstMounted = useRef(true);
  useUpdateLayoutEffect(() => {
    if (!isFirstMounted.current) {
      return;
    }
    isFirstMounted.current = false;
    effect();
  }, deps);
};

export default useOnceUpdateLayoutEffect;
